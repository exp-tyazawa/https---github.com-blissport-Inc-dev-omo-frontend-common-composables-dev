// manage用
export const useMyInfo = () => {
  const { getMyInfo } = useApi();

  // stateの定義
  const email = useState('email', () => '');
  const icon = useState('icon', () => '');
  const manageCapacity = useState('manageCapacity', () => null);
  const name = useState('name', () => '');

  const updateMyInfo = async () => {
    const result = await getMyInfo()
      .then((res) => res)
      .catch((e) => {
        console.error(e);
        useServiceError();
      });
    if (result?.name) {
      name.value = result.name;
    }
    icon.value = result.icon ?? null;
    if (result?.email) {
      email.value = result.email;
    }
    manageCapacity.value = result.support_login_status ?? 0;
    return true;
  };

  const deleteMyInfo = () => {
    email.value = '';
    icon.value = '';
    manageCapacity.value = null;
    name.value = '';
  };

  return {
    email,
    icon,
    manageCapacity,
    name,
    deleteMyInfo,
    updateMyInfo,
  };
};

export const useMaintenanceStatus = () => {
  const { getMaintenanceStatus } = useApi();

  const isUnderMaintenance = useState('isUnderMaintenance', () => undefined);

  const setMaintenanceStatus = async () => {
    const result = await getMaintenanceStatus()
      .then((res) => res)
      .catch((e) => {
        console.error(e);
      });
    if (result) {
      isUnderMaintenance.value = result;
    }
    return result;
  };

  return {
    isUnderMaintenance,
    setMaintenanceStatus,
  };
};
