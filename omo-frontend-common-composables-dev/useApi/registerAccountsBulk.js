export default async (csvFile) => {
  if (!csvFile) throw new Error('no CSV file');
  const formData = new FormData();
  formData.append('csv', csvFile, csvFile.name);
  const result = await useFetchApi(
    '/api/v1/account/upload',
    true,
    'POST',
    formData
  );
  return useRespondApi(result, 'register new account(s) bulk');
};
