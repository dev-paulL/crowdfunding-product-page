export default function BookmarkIcon({isBookmarked}:{isBookmarked:boolean}) {
  return (
    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg" >
      <g fill="none" fillRule="evenodd">
        <circle fill={`${!isBookmarked ? "#2F2F2F" : 'darkCyan'}`} cx="28" cy="28" r="28" />
        <path fill={`${!isBookmarked ? "#B1B1B1" : 'white'}`} d="M23 19v18l5-5.058L33 37V19z" />
      </g>
    </svg>
  );
}
