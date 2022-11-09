export default async (token, password) => {
  if (!token || !password) throw new Error('Insufficient param(s)');
  const result = await useFetchApi('/api/v1/password-reset', false, 'PATCH', {
    token,
    password,
  });
  return useRespondApi(result, 'reset password', false);
};
