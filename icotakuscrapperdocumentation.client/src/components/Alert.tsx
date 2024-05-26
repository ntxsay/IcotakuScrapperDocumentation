import '../styles/components/alert.scss';

interface AlertProps {
  content: JSX.Element | string;
  icon: AlertIcon;
  mode: AlertMode;
}

export const enum AlertMode
{
    Success,
    Info,
    Warning,
    Danger
}

export const enum AlertIcon
{
    Success,
    Info,
    Warning,
    Danger,
    Spinner
}

const AlertComponent = ({icon, mode, content }: AlertProps) => {
  
    function alertModeClass () : string {
        switch (mode) {
            case AlertMode.Success:
                return "alert-success";
            case AlertMode.Info:
                return "alert-info";
            case AlertMode.Warning:
                return "alert-warning";
            case AlertMode.Danger:
                return "alert-danger";
            default:
                return "alert-info";
        }
    }
    
    function alertIconClass () : string  {
        switch (icon) {
            case AlertIcon.Success:
                return "fa-solid fa-circle-check";
            case AlertIcon.Info:
                return "fa-solid fa-circle-info";
            case AlertIcon.Warning:
                return "fa-solid fa-circle-exclamation";
            case AlertIcon.Danger:
                return "fa-solid fa-circle-xmark";
            case AlertIcon.Spinner:
                return "fa-solid fa-spinner-third";
            default:
                return "fa-solid fa-circle-info";
        }
    }
    
    const _alertModeClass : string = alertModeClass();
    const _alertIconClass : string = alertIconClass();
    
    return (
      <div className={`alert-container ${_alertModeClass}`} role="alert">
        <i className={`${_alertIconClass}`}></i>
        <p>{content}</p>
      </div>
  );
}

export default AlertComponent;