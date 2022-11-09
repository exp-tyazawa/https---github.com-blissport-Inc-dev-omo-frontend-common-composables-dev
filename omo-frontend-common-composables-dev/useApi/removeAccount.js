export default async (uuid) => {
  if (!uuid) throw new Error('no user ID');
  const result = await useFetchApi(`/api/v1/account/${uuid}`, true, 'DELETE');
  return useRespondApi(result, 'remove account', false);
};
