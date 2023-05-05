import React from 'react';

function Stonk({position, ticker, sentiment, sentiment_score, comments}) {
    return ( 
        <div className="stonk">
            <li key="stonk-item"></li>
                <h3>#{position} {ticker}</h3>
                <h4>{sentiment}: {sentiment_score}</h4>
                <h5>Comments: {comments}</h5>
        </div>
     );
}

export default Stonk;