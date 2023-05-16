// import Feedback from './feedback/Feedback';
import React, { useState } from 'react';
import { Statistics } from '../statistics/Statistics';
import { FeedbackOptions } from '../feedback-options/FeedbackOptions';
import { Section } from '../section/Section';
import { Container } from './App.styled';
import { Notification } from '../notification/Notification';

export const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const { good, neutral, bad } = options;

  const onLeaveFeedback = option => {
    setOptions({ ...options, [option]: options[option] + 1 });
  };

  const countTotalFeedback = () => good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback()) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  return (
    <Container>
      <Section title="Please leave feadback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback"> </Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
};
