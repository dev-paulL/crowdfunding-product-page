type MainCTAProps = {
  text: string;
  extraClass: string;
  isDisabled?:boolean;
};
export default function MainCTA({ text, extraClass, isDisabled }: MainCTAProps) {
  return <button disabled={isDisabled} className={`bg-moderateCyan rounded-full text-white font-bold px-8 py-4 ${extraClass}`}>{text}</button>;
}
