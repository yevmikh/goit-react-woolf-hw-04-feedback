import moduleCss from './feedBackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={moduleCss.buttongroup}>
    {options.map(option => (
      <button
        className={moduleCss.button}
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
