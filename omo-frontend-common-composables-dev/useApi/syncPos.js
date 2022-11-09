export default async (systemId, csvFile) => {
  if (!systemId || !csvFile) throw new Error('Insufficient param(s)');
  const formData = new FormData();
  formData.append('pos_system_id', systemId);
  formData.append('csv', csvFile, csvFile.name);
  const result = await useFetchApi(
    '/api/v1/pos/upload',
    true,
    'POST',
    formData
  );
  return useRespondApi(result, 'sync pos');
};
