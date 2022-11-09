export default async (year) => {
  const reqYear = year || useDayjs().format('YYYY');
  const result = await useFetchApi(
    `/api/v1/quota?year=${reqYear}`,
    true,
    'GET'
  );
  return useRespondApi(result, 'get quota');
};
