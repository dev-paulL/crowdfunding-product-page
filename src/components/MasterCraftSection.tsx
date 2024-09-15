import mastercraftLogo from "../assets/logo-mastercraft.svg";
import bookmarkIcon from "../assets/icon-bookmark.svg";
import MainCTA from "./MainCTA";

export default function MasterCraftSection() {
  const onBookmarkClick = () => {
    console.log("ye");
  };
  return (
    <section className="section -translate-y-28 -mb-28 relative">
      <img src={mastercraftLogo} alt="" className="absolute -top-8" />
      <h1 className="font-bold text-2xl mt-8 w-[80%]">
        Mastercraft Bamboo Monitor Riser
      </h1>
      <p className="text-darkGray">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className="flex justify-between w-full gap-4">
        <MainCTA
          text="Back this project"
          extraClass="!px-4 lg:!px-8 flex-1 lg:flex-none"
        />

        <div className="flex items-center gap-4 bg-darkGray rounded-full bg-opacity-15  font-bold">
          <button id="bookmark" aria-label="Bookmark this project" onClick={onBookmarkClick}>
            <img src={bookmarkIcon} alt="" />
          </button>
          <label htmlFor="bookmark" className="text-darkGray pr-6 hidden lg:inline-block">
            Bookmark
          </label>
        </div>
      </div>
    </section>
  );
}
