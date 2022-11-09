export default async (uuid, data, icon) => {
  if (!uuid) throw new Error('no user ID');
  const { editAccount } = useApi();
  const result = await editAccount(uuid, data, icon);
  return result;
};
