import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.container}>
      {options.map(option => (
        <button className={css.btn}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
          key={option}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
