export default async () => {
  const result = await useFetchApi('/api/v1/organization', true, 'GET');
  return useRespondApi(result, 'get organizations');
};
