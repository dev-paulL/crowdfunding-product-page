import { pledgePlans } from "../data";

export default function PledgePlans() {
  return (
    <div className="flex flex-col gap-6">
      {pledgePlans.map((plan) => {
        const isAvailable = plan.amountInStock > 0;
        return (
          <div className={`section !w-full !items-start !text-left !shadow-sm ${!isAvailable && "!opacity-55"}`}>
            <div className="block lg:flex lg:justify-between w-full">
              <h4 className={`font-bold text-black text-lg`}>{plan.name}</h4>
              <p className={`font-medium ${isAvailable ? "!text-darkCyan" : "!text-moderateCyan"}`}>Pledge ${plan.pledgeAmount} or more</p>
            </div>
            <p className="text-pretty">{plan.description}</p>
            <p className="">
              <span className="align-middle text-4xl font-bold text-Black">{plan.amountInStock}</span> left
            </p>
            <button disabled={!isAvailable} className={`rewardBtn ${!isAvailable && "!bg-darkGray"}`}>
              {isAvailable ? "Select Reward" : "Out of Stock"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
