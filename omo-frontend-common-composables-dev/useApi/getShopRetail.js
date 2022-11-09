export default async (shopId) => {
  if (!shopId) throw new Error('no shop ID');

  const result = await useFetchApi(
    `/api/v1/shop/invitation/${shopId}`,
    false,
    'GET'
  );
  return useRespondApi(result, 'get shop retail');
};
