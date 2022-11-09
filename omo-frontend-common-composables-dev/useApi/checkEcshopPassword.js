export default async (password) => {
  if (!password) throw new Error('no password');
  const result = await useFetchApi('/api/v1/ec-shop/password', true, 'POST', {
    password,
  });
  return useRespondApi(result, 'check ecshop password');
};
