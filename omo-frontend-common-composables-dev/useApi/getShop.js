export default async (uuid) => {
  if (!uuid) throw new Error('no shop ID');
  const { getShops } = useApi();
  const shops = await getShops();
  if (!shops.length) return false;
  const target = shops.find((elm) => elm.uuid === uuid);
  if (target?.url_group_name && target?.code_id) {
    return { urlGroupName: target.url_group_name, codeId: target.code_id };
  } else {
    return false;
  }
};
