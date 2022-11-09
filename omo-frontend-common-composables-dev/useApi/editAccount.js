export default async (uuid, data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    // 意図的に消したいときに対応
    if (
      (data[key] || data[key]?.length || data[key] === '' || data[key] === 0) &&
      data[key] !== null
    ) {
      if (key === 'ec_shop_id') {
        data.ec_shop_id.forEach((elm) => {
          formData.append('ec_shop_id[]', elm);
        });
      } else {
        formData.append(key, data[key]);
      }
    }
  });

  const endpoint = '/api/v1/account' + (uuid ? `/${uuid}` : '');
  const result = await useFetchApi(endpoint, true, 'POST', formData);
  return useRespondApi(result, 'edit account', false);
};
