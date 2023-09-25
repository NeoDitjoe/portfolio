import ReactDOM from 'react-dom';

import style from 'styles/notification.module.css';

function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = style.success;
  }

  if (status === 'error') {
    statusClasses = style.error;
  }

  const cssClasses = `${style.notification} ${statusClasses}`;

  return ReactDOM.createPortal(
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  );
}

export default Notification;