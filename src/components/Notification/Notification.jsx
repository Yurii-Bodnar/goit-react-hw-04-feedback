import PropTypes from 'prop-types';
import css from './Notification.module.css';

const Notification = ({ massage }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>{massage}</p>
    </div>
  );
};

Notification.propTypes = {
  massage: PropTypes.string,
};

export default Notification;
