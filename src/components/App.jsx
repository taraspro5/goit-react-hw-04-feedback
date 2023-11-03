import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickOption = option =>
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const sum = good + neutral + bad;
    const percent = (good / sum) * 100;
    return `${Math.round(percent)}%`;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onClickOption}
          />
        </Section>

        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </>
    );
  }
}
