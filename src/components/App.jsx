import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = option => {
    setFeedback(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const positivePercentage = total ? Math.round((good / total) * 100) : 0;

  return (
    <div
      style={{
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
        flexDirection: 'column',
        rowGap: 30,
        padding: 100,
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <p>There is no feedback yet.</p>
        )}
      </Section>
    </div>
  );
};
