import PropTypes from 'prop-types';
import { OptionsList, OptionsBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <OptionsBtn
          type="button"
          option={option}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </OptionsBtn>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
