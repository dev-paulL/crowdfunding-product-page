import mastercraftLogo from "../assets/logo-mastercraft.svg";
import bookmarkIcon from "../assets/icon-bookmark.svg";

export default function MasterCraftSection() {
  return (
    <section className="section -translate-y-16 relative">
      <img src={mastercraftLogo} alt="" className="absolute -top-8" />
      <h1 className="font-bold text-2xl mt-8 w-[80%]">Mastercraft Bamboo Monitor Riser</h1>
      <p className="text-darkGray">
        A beautifully handcrafter monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between w-full gap-4">
        <button className="bg-moderateCyan rounded-full text-white font-bold p-4 flex-1">Back this project</button>

        <button aria-label="Bookmark this project">
          <img src={bookmarkIcon} alt="" />
        </button>
      </div>
    </section>
  );
}
