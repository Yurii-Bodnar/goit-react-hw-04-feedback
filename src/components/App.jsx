import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const { name } = e.target;
    this.setState(prewState => {
      return {
        [name]: prewState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let totlalFedback = good + neutral + bad;
    return totlalFedback;
  };
  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total !== 0) {
      const { good } = this.state;
      let percentage = (good / total) * 100;
      percentage = Math.round(percentage);
      return percentage;
    }
    return 0;
  };

  stateKey = keys => Object.keys(keys);

  render() {
    const {good,neutral,bad} = this.state
    return (
      <>
        <Section title="Please leave feedback" >
        <FeedbackOptions
          options={this.stateKey(this.state)}
          onLeaveFeedback={this.handleFeedback}
        />
        </Section>
        <Section title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notification massage={'There is no feedback'} />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalFeedback={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
