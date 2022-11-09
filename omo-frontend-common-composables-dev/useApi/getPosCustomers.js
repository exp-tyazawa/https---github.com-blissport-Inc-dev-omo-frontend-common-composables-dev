export default async (name) => {
  let endpoint = '/api/v1/pos';
  if (name) {
    endpoint += `?name=${encodeURI(name)}`;
  }
  const result = await useFetchApi(endpoint, true, 'GET');
  return useRespondApi(result, 'get pos customers');
};
