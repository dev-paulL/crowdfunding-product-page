import closeModalIcon from "../assets/icon-close-modal.svg";
import { pledgePlans } from "../data";
import SelectPlanModalItem from "./SelectPlanModalItem";

export default function SelectPlanModal() {
  return (
    <div>
      <div>
        <h2>Back this project</h2>
        <button aria-label="Close pledge selection modal">
          <img src={closeModalIcon} alt="" />
        </button>
      </div>
      <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

      <SelectPlanModalItem
        planTitle="Pledge with no reward"
        planDescription="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates
          via email."
        inputId="pledgeNoReward"
      />
      {pledgePlans.map((plan) => {
        return (
          <SelectPlanModalItem planTitle={plan.name} planDescription={plan.description} pledgeAmount={plan.pledgeAmount} inputId={plan.name.trim()} />
        );
      })}
    </div>
  );
}
