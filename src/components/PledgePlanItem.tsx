import { pledgePlan } from "../data";
import MainCTA from "./MainCTA";
import PledgeAmountText from "./PledgeAmountText";

type PledgePlanItemProps = {
  plan: pledgePlan;
  isAvailable: boolean;
};
export default function PledgePlanItem({ plan, isAvailable }: PledgePlanItemProps) {
  return (
    <div className={`section !w-full !items-start !text-left !shadow-sm ${!isAvailable && "!opacity-55"}`}>
      <div className="block lg:flex lg:justify-between w-full">
        <h4 className={`font-bold text-black text-lg`}>{plan.name}</h4>
        <PledgeAmountText pledgeAmount={plan.pledgeAmount} isAvailable={isAvailable} />
      </div>
      <p className="text-pretty">{plan.description}</p>
      <p className="">
        <span className="align-middle text-4xl font-bold text-Black">{plan.amountInStock}</span> left
      </p>
      <MainCTA text={isAvailable ? "Select Reward" : "Out of Stock"} extraClass={!isAvailable ? "!bg-darkGray" : ""} isDisabled={!isAvailable} />
    </div>
  );
}
