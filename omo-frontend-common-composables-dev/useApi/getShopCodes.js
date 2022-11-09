export default async (uuid) => {
  if (!uuid) throw new Error('no shop ID');
  const result = await useFetchApi(`/api/v1/shop-code/${uuid}`, true, 'GET');
  return useRespondApi(result, 'get shop code');
};
