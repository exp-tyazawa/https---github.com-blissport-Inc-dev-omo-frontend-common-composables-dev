export default async () => {
  // 次期開発対象
  // const result = await useFetchApi('/api/v2/announcement', true, 'GET');
  // return useRespondApi(result, 'get announcements');
  const result = await useMicroCms('announcement', {
    limit: 999,
    filters: `released[less_than]${useDayjs().toISOString()}`,
    orders: '-released',
  }).then((res) => res);
  return result;
};
