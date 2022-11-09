export const useError = () => {
  // stateの定義
  const error = useState('error', () => '');

  // stateの更新処理
  const updateError = (error) => (value) => {
    error.value = value;
  };

  return {
    error: readonly(error),
    updateError: updateError(error),
  };
};

export const useServiceError = (
  message = '通信に失敗しました。時間をおいてお試しください。'
) => {
  const { updateError } = useError();
  updateError(message);
};
