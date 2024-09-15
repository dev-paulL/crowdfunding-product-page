import ProgressBar from "./ProgressBar";
import StatsSeparator from "./StatsSeparator";

export default function ProjectStatsSection() {
  return (
    <article className="section lg:p-14 lg:!items-start">
      <div className="flex flex-col lg:flex-row items-center gap-6">
        <h2 className="text-darkGray text-center lg:!text-left">
          <strong className="text-black font-bold text-3xl block">$89,914</strong> of $100,000 backed
        </h2>
        <StatsSeparator />
        <h2 className="text-darkGray lg:!text-left">
          <strong className="text-black font-bold text-3xl block">5,007</strong> total backers
        </h2>
        <StatsSeparator />
        <h2 className="text-darkGray text-center lg:!text-left">
          <strong className="text-black font-bold text-3xl block">56</strong> days left
        </h2>
      </div>
      <ProgressBar />
    </article>
  );
}
