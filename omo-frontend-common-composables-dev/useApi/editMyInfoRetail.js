export default async (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (
      (data[key] || data[key] === '' || data[key] === 0) &&
      data[key] !== null
    ) {
      formData.append(key, data[key]);
    }
  });

  const result = await useFetchApi(
    '/api/v1/account/retail',
    true,
    'POST',
    formData
  );
  return useRespondApi(result, 'edit my info retail');
};
