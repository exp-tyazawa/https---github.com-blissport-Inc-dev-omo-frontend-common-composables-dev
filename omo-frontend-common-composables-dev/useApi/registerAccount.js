export default async (data) => {
  const { editAccount } = useApi();
  const result = await editAccount(null, data);
  return result;
};
