export default async (uuid) => {
  if (!uuid) throw new Error('no user ID');
  const result = await useFetchApi(
    `/api/v1/account/invitation/${uuid}`,
    false,
    'GET'
  );
  return useRespondApi(result, 'get account info retail');
};
