export default async (uuid) => {
  if (!uuid) throw new Error('no ecshop ID');
  const result = await useFetchApi(`/api/v1/ec-shop/${uuid}`, true, 'GET');
  return useRespondApi(result, 'get ecshop info');
};
