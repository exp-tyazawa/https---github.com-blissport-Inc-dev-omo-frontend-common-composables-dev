export default async (email, password) => {
  const { APP_MODE } = useRuntimeConfig();
  let endpoint = '/api/v1/login';
  const param = {
    email,
    password,
  };
  if (APP_MODE === 'admin') {
    endpoint = '/api/v2/login/admin';
  } else {
    param.ref_status = APP_MODE === 'manage' ? 1 : 0;
  }
  const result = await useFetchApi(endpoint, false, 'POST', param);
  return useRespondApi(result, 'login', true, 'ログインに失敗しました');
};
