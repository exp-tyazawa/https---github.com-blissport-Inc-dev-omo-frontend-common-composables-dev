export default async () => {
  const { getOrganizations } = useApi();
  const result = await getOrganizations();
  return result.length ? result[0] : {};
};
