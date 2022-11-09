export default async (uuid, password, newPassword) => {
  if (!uuid || !password || !newPassword)
    throw new Error('Insufficient param(s)');
  const result = await useFetchApi(
    `/api/v1/account/password/${uuid}`,
    true,
    'PATCH',
    {
      current_password: password,
      new_password: newPassword,
    }
  );
  return useRespondApi(result, 'update password', false);
};
