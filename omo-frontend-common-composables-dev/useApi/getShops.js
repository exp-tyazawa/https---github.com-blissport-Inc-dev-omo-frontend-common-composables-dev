export default async () => {
  const result = await useFetchApi('/api/v1/shop', true, 'GET');
  return useRespondApi(result, 'get shops');
};
