import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>
          <p>Good:{good}</p>
        </li>
        <li className={css.item}>
          <p>Neutral:{neutral}</p>
        </li>
        <li className={css.item}>
          <p>bad:{bad}</p>
        </li>
        <li className={css.item}>
          <p>Total:{totalFeedback}</p>
        </li>
        <li className={css.item}>
          <p>Positive feedback:{positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
