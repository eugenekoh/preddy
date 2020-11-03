import React from "react";
import "./market.scss";
import MarketDetail from "../containers/market_detail";

const MOCK_MARKET = {
  question: "Will Joe Biden Win the Elections",
  description: "or will it be trimp",
  endDate: Date.now() + 10000000000,
  voteDetails: [
    {
      outcome: "Yes",
      percentage: 0.3,
    },
    {
      outcome: "No",
      percentage: 0.7,
    },
  ],
  stakes: "112576.06 DAI",
  open: true,
  arbiter: "asdfdsfafdsd",
};

export default (props) => {
  // destructure drizzle and drizzleState from props
  return (
    <div className="market">
      <MarketDetail
        address={props.match.params.address}
        question={MOCK_MARKET.question}
        description={MOCK_MARKET.description}
        endDate={MOCK_MARKET.endDate}
        voteDetails={MOCK_MARKET.voteDetails}
        isOpen={MOCK_MARKET.open}
        arbiter={MOCK_MARKET.arbiter}
      />
    </div>
  );
};
