import { useCookies } from '@vueuse/integrations/useCookies';

export default async () => {
  const { getHerInfo } = useApi();

  const cookies = useCookies();
  const { myId: stateId } = useMyId();
  const cookieId = cookies.get('myId');
  const myId = stateId.value || cookieId || null;
  if (!myId) return false;
  const result = await getHerInfo(myId);
  return result;
};
