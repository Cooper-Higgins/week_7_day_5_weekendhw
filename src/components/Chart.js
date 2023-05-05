import React from 'react';
import Stonk from './Stonk';

const Chart = ({stonks}) => {

  return (
    <div>
      {stonks.map((stonk, index) => {
      return (
        <Stonk
          position={index + 1}
          ticker={stonk["ticker"]}
          sentiment={stonk["sentiment"]}
          sentiment_score={stonk["sentiment_score"]}
          comments={stonk["no_of_comments"]}
        />
      )
    })}
    </div>
  );
};

export default Chart;