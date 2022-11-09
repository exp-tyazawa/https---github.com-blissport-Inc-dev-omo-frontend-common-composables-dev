export default async (systemId, tableName) => {
  if (!systemId || !tableName) throw new Error('Insufficient param(s)');
  const result = await useFetchApi('/api/v1/shop', true, 'POST', {
    cart_system_id: systemId,
    cart_system_table_name: tableName,
  });
  return useRespondApi(result, 'sync shop', false);
};
