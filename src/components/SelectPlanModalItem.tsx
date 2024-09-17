import React from "react";
import PledgeAmountText from "./PledgeAmountText";

type SelectPlanModalItemProps = {
  planTitle: string;
  inputId: string;
  planDescription: string;
  pledgeAmount?:number;
};
const SelectPlanModalItem: React.FC<SelectPlanModalItemProps> = ({ planTitle, inputId, planDescription, pledgeAmount }) => {
  return (
    <article>
      <div>
        <input type="radio" name="selectedPledgePlan" id={inputId} />
        <h3>
          <label htmlFor={inputId}>{planTitle}</label>
        </h3>
        {pledgeAmount && <PledgeAmountText pledgeAmount={pledgeAmount}/>}
    </div>
        <p>
         {planDescription}
        </p>
      
    </article>
  );
};

export default SelectPlanModalItem;
