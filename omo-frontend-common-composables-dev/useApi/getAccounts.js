export default async (filter) => {
  let endpoint = '/api/v1/account';
  if (Object.keys(filter).length) {
    endpoint += `?${useStringifyQuery(filter)}`;
  }
  const result = await useFetchApi(endpoint, true, 'GET');
  return useRespondApi(result, 'get accounts');
};
