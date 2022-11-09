export default async (email) => {
  if (!email) throw new Error('no e-mail address');

  const result = await useFetchApi('/api/v1/password-reset', false, 'POST', {
    email,
  });
  return useRespondApi(result, 'forgot password');
};
