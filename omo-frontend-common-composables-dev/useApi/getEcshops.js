export default async (uuid) => {
  let endpoint = '/api/v1/ec-shop';
  if (uuid) {
    endpoint += `?uuid=${uuid}`;
  }
  const result = await useFetchApi(endpoint, true, 'GET');
  return useRespondApi(result, 'get ecshops');
};
