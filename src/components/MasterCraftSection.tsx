import mastercraftLogo from "../assets/logo-mastercraft.svg";
import MainCTA from "./MainCTA";
import { useState } from "react";
import BookmarkIcon from "./BookmarkIcon";

export default function MasterCraftSection() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const toggleBookmarked = () => {
    setIsBookmarked((iB) => !iB);
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

        <div className="flex items-center gap-4 bg-darkGray rounded-full bg-opacity-15  font-bold hover:opacity-60 transition-opacity cursor-pointer">
          <button
            id="bookmark"
            aria-label="Bookmark this project"
            onClick={toggleBookmarked}
          >
            <BookmarkIcon isBookmarked={isBookmarked} />
          </button>
          <label
            aria-live="assertive"
            htmlFor="bookmark"
            className={` pr-6 hidden lg:inline-block cursor-pointer h-full content-center ${
              !isBookmarked ? "text-darkGray" : "text-darkCyan"
            }`}
          >
            {!isBookmarked ? "Bookmark" : "Bookmarked"}
          </label>
        </div>
      </div>
    </section>
  );
}
