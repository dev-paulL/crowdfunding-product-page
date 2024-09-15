export default function ProjectStatsSection() {
  return (
    <article className="section">
      <h2 className="text-darkGray text-center">
        <strong className="text-black font-bold text-3xl block">$89,914</strong>{" "}
        of $100,000 backed
      </h2>
      <hr className="w-[30%] border-t border-darkGray opacity-30"/>
      <h2 className="text-darkGray text-center">
        <strong className="text-black font-bold text-3xl block">5,007</strong>{" "}
        total backers
      </h2>
      <hr className="w-[30%] border-t border-darkGray opacity-30"/>
      <h2 className="text-darkGray text-center">
        <strong className="text-black font-bold text-3xl block">56</strong> days
        left
      </h2>

      <div className="mt-4 w-full h-4 rounded-full bg-darkGray bg-opacity-25 overflow-hidden"><div className="w-[70%] bg-moderateCyan h-full rounded-full"></div></div>
    </article>
  );
}
