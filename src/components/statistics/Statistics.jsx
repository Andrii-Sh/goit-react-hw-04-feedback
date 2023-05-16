import PropTypes from 'prop-types';
import { StatisticsList, StatisticsItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <StatisticsList>
    <StatisticsItem>Good: {good}</StatisticsItem>
    <StatisticsItem>Neutral: {neutral}</StatisticsItem>
    <StatisticsItem>Bad: {bad}</StatisticsItem>
    <StatisticsItem>Total: {total}</StatisticsItem>
    <StatisticsItem>Positive feedback: {positivePercentage}%</StatisticsItem>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
