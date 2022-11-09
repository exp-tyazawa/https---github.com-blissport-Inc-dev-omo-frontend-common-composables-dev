import { useFetch } from '@vueuse/core';
import { useRemoveAuth } from './useAuth';

export const useFetchApi = async (
  url,
  auth = true,
  method = 'GET',
  payload = {}
) => {
  const { myToken: token } = useToken();

  // 3.0.0-27616818.bab9f4b 現時点でproxyが機能しないのでここでURL書き換える
  const { IS_LOCAL, IS_DEV } = useRuntimeConfig();
  const _url =
    (IS_LOCAL
      ? 'http://localhost:3030'
      : IS_DEV
      ? 'https://megly.omo.tools' // 仮エンドポイント
      : '') + url;

  const opts = {
    beforeFetch({ options }) {
      options.headers = {
        ...options.headers,
        Accept: 'application/json',
      };
      if (auth) {
        options.headers = {
          ...options.headers,
          Authorization: `Bearer ${token.value}`,
        };
      }
      return {
        options,
      };
    },
  };

  let result = null;
  switch (method) {
    case 'POST':
      result = await useFetch(_url, opts).post(payload).json();
      break;
    case 'PUT':
      result = await useFetch(_url, opts).put(payload).json();
      break;
    case 'DELETE':
      result = await useFetch(_url, opts).delete(payload).json();
      break;
    case 'PATCH':
      result = await useFetch(_url, opts).patch(payload).json();
      break;
    default:
      result = await useFetch(_url, opts).json();
  }

  if (
    result.statusCode?.value === 401 &&
    result.data?.value?.message === 'Unauthenticated.'
  ) {
    useRemoveAuth();
  } else if (result.statusCode?.value === 403) {
    useRouter().push('/403');
  } else {
    return result;
  }
};

export const useRespondApi = (
  { statusCode, data, error },
  caller = '',
  returnData = true,
  errorMessage = ''
) => {
  if (statusCode.value === 200) {
    if (!returnData) {
      return true;
    } else if (data?.value?.response?.data) {
      return data.value.response.data;
    } else {
      console.error(`API: ${caller}`, 'no data');
      throw new Error('no data');
    }
  } else {
    console.error(`API: ${caller}`, statusCode?.value, error?.value);
    if (/^40/.test(statusCode.value) && data?.value?.response?.error) {
      const _e = data.value.response.error;
      _e.status = statusCode.value;
      throw new Error(JSON.stringify(_e));
    } else {
      useServiceError(errorMessage);
      throw new Error(statusCode.value);
    }
  }
};
