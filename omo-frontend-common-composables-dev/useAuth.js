// https://zenn.dev/coedo/articles/route-middleware-nuxt3
import { useCookies } from '@vueuse/integrations/useCookies';

const cookies = useCookies();

export const useMyId = () => {
  const myId = useState('myId', () => '');
  return { myId };
};
export const useToken = () => {
  const myToken = useState('token', () => '');
  return { myToken };
};

export const useRemoveAuth = () => {
  const { LOGIN_PAGE } = useRuntimeConfig();
  const { deleteMyInfo } = useMyInfo();
  const { myId } = useMyId();
  const { myToken } = useToken();

  deleteMyInfo();
  cookies.remove('myId');
  cookies.remove('token');
  myId.value = '';
  myToken.value = '';
  useRouter().push(LOGIN_PAGE);
};

const login = (isAuthed) => async (payload) => {
  const { email, password } = payload;
  if (!email || !password) return false;
  const { login: useLogin } = useApi();
  const { uuid, token } = await useLogin(email, password)
    .then((res) => res)
    .catch((e) => {
      throw e;
    });
  cookies.set('myId', uuid, { sameSite: 'Strict' });
  cookies.set('token', token, { sameSite: 'Strict' });
  const { myId } = useMyId();
  myId.value = uuid;
  const { myToken } = useToken();
  myToken.value = token;
  isAuthed.value = true;
  return true;
};

const logout = (isAuthed) => () => {
  const { logout: useLogout } = useApi();
  const { email } = useMyInfo();
  useLogout(email.value)
    .then((res) => {
      if (res) {
        useRemoveAuth();
        isAuthed.value = false;
      } else {
        useServiceError();
        throw new Error('logout failed');
      }
    })
    .catch((e) => {
      useServiceError();
      throw e;
    });
};

export const useAuth = () => {
  const { myId } = useMyId();
  if (!myId.value && cookies.get('myId')) {
    myId.value = cookies.get('myId');
  }
  const { myToken } = useToken();
  if (!myToken.value && cookies.get('token')) {
    myToken.value = cookies.get('token');
  }
  const isAuthed = useState('isAuthed', () => myId.value && myToken.value);
  return {
    isAuthed,
    login: login(isAuthed),
    logout: logout(isAuthed),
  };
};
