export default async (year, quotas) => {
  if (!year || !quotas?.length) throw new Error('Insufficient param(s)');
  const regularizedQuotas = quotas.map((elm) => {
    const result = {
      account_id: elm.account_id,
      quota: {},
    };
    Object.keys(elm.quota).forEach((key) => {
      result.quota[key] = elm.quota[key] - 0;
    });
    return result;
  });

  const result = await useFetchApi('/api/v1/quota', true, 'POST', {
    year,
    quotas: regularizedQuotas,
  });
  return useRespondApi(result, 'set quota', false);
};
