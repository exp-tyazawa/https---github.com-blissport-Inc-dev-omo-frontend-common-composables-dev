export default async (uuid, month) => {
  if (!uuid) throw new Error('no user ID');

  const options = {
    account_uuid: uuid,
  };
  options.date = month.replace(/-/, '/') || useDayjs().format('YYYY/MM');
  const result = await useFetchApi(
    `/api/v1/profit/retail?${useStringifyQuery(options)}`,
    true,
    'GET'
  );
  return useRespondApi(result, "get account's profit");
};
