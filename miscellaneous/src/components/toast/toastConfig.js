import AppToast from './AppToast';

export const toastConfig = {
  success: props => <AppToast {...props} type="success" />,

  error: props => <AppToast {...props} type="error" />,

  warning: props => <AppToast {...props} type="warning" />,

  info: props => <AppToast {...props} type="info" />,
};
