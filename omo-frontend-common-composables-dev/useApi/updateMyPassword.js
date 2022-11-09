import { useCookies } from '@vueuse/integrations/useCookies';

export default async (password, newPassword) => {
  if (!password || !newPassword) {
    throw new Error('Insufficient param(s)');
  }
  const cookies = useCookies();
  const { myId: stateId } = useMyId();
  const cookieId = cookies.get('myId');
  const myId = stateId.value || cookieId || null;
  if (!myId) return false;
  const { updatePassword } = useApi();
  const result = await updatePassword(myId, password, newPassword);
  return result;
};
