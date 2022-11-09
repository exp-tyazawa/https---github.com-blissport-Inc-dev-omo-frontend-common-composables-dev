export default async (month, shopId = '') => {
  if (!month) throw new Error('no target month');
  const options = {};
  if (shopId) {
    options.shop_uuid = shopId;
  }
  options.date = month.replace(/-/, '/') || useDayjs().format('YYYY/MM');
  const result = await useFetchApi(
    `/api/v1/profit/retail/ranking?${useStringifyQuery(options)}`,
    true,
    'GET'
  );
  return useRespondApi(result, 'get ranking');
};
