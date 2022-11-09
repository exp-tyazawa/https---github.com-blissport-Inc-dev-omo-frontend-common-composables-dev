// 管理的に個別ログアウトを可能にするためemailを引数に
export default async (email) => {
  if (!email) throw new Error('no mail address');
  const result = await useFetchApi('/api/v1/logout', true, 'POST', {
    email,
  });
  return useRespondApi(result, 'logout', false, 'ログアウトできませんでした');
};
