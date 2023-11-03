import { Notification } from 'components/Notification/Notification';
import { Paragraf } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  const isFeedbacks = total;
  return isFeedbacks ? (
    <>
      <h2>Statistics</h2>
      <div>
        <Paragraf>Good: {good}</Paragraf>
        <Paragraf>Neutral: {neutral}</Paragraf>
        <Paragraf>Bad: {bad}</Paragraf>
        <Paragraf>Total: {total}</Paragraf>
        <Paragraf>Positive feedback: {positivePercentage}</Paragraf>
      </div>
    </>
  ) : (
    <Notification message={'There is no feedback'} />
  );
};
