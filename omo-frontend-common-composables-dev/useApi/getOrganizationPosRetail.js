export default async () => {
  const result = await useFetchApi(
    '/api/v2/organization/invitation',
    true,
    'GET'
  );
  return useRespondApi(result, 'get organization pos-system retail');
};
