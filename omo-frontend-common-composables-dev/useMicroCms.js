import { useFetch } from '@vueuse/core';

// microCMS SDKと相性が悪いので直接
export default async (endpoint, queries = {}) => {
  let url = `https://omo.microcms.io/api/v1/${endpoint}`;
  if (Object.keys(queries).length) {
    url += `?${useStringifyQuery(queries)}`;
  }
  const opts = {
    headers: {
      'X-MICROCMS-API-KEY': '1624b2d803564eaea713a12f5304399c2608',
    },
  };
  const result = await useFetch(url, opts)
    .json()
    .then((res) => {
      if (res?.data) {
        return res.data;
      }
    })
    .catch((e) => {
      throw e;
    });
  return result;
};
