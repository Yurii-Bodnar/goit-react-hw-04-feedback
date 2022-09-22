import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { useState } from 'react';


export const App = () =>  {
  const [good , setGood] = useState(0);
  const [neutral , setNeutral] = useState(0);
  const [bad , setBad] = useState(0)

  const handleFeedback = e => {
    
    const { name } = e.target;
    
    if(name === "good"){
      setGood((prew)=>{
        return prew + 1
      })
    }
    if(name === "neutral"){
      setNeutral((prew)=>{
        return prew + 1
      })
    }
    if(name === "bad"){
      setBad((prew)=>{
        return prew + 1
      })
    }
    
  };
  
  let totlalFedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    let total = totlalFedback

    if (total !== 0) {
      let percentage = (good / total) * 100;
      percentage = Math.round(percentage);
      return percentage;
    }
    return 0;
  };


const options = ["good", "bad", "neutral" ]

    return (
      <>
        <Section title="Please leave feedback" >
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleFeedback}
        />
        </Section>
        <Section title="Statistics">
          {good + neutral + bad === 0 ? (
            <Notification massage={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeedback={totlalFedback}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }

