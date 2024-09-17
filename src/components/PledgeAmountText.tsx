import React from "react";

type PledgeAmountTextProps = {
  isAvailable?: boolean;
  pledgeAmount: number;
};
const PledgeAmountText : React.FC<PledgeAmountTextProps> = ({isAvailable, pledgeAmount}) => {
  return <p className={`font-medium ${isAvailable ? "!text-darkCyan" : "!text-moderateCyan"}`}>Pledge ${pledgeAmount} or more</p>;
}

export default PledgeAmountText