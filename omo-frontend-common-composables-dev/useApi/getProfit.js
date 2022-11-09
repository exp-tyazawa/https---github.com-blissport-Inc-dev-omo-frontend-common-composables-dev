export default async (from = null, to = null, displayFormat = null) => {
  const options = {};
  if (from) options.from = from;
  if (to) options.to = to;
  if (typeof displayFormat === 'number') options.display_format = displayFormat;
  const result = await useFetchApi(
    `/api/v1/profit/manage?${useStringifyQuery(options)}`,
    true,
    'GET'
  );
  return useRespondApi(result, 'get profit');
};
