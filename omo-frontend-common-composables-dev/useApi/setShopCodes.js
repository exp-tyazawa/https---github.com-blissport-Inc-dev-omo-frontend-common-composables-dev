export default async (uuid, codes) => {
  if (!uuid || !codes) throw new Error('Insufficient param(s)');
  const result = await useFetchApi(`/api/v1/shop-code/${uuid}`, true, 'POST', {
    shop_code: codes,
  });
  return useRespondApi(result, 'set shop code');
};
