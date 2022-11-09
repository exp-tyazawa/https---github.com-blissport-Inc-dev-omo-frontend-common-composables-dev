export default async () => {
  const result = await useMicroCms('maintenance').then((res) => res);
  return result?.value?.isUnderMaintenance ?? false;
};
