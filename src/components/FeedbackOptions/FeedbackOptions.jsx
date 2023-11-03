import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const array = Object.entries(options);
  console.log(array);

  return array.map(btn => {
    return (
      <Button
        key={btn[0]}
        onClick={evt => {
          onLeaveFeedback(evt.target.textContent);
        }}
      >
        {btn[0]}
      </Button>
    );
  });
};
