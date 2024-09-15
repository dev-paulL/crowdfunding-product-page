import { pledgePlans } from "../data";
import PledgePlanItem from "./PledgePlanItem";

export default function PledgePlans() {
  return (
    <div className="flex flex-col gap-6">
      {pledgePlans.map((plan) => {
        const isAvailable = plan.amountInStock > 0;
        return (
          <PledgePlanItem plan={plan} isAvailable={isAvailable} key={plan.name} />
        );
      })}
    </div>
  );
}
