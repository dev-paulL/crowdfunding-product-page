import ValidationMessage from "./ValidationMessage";

/* type ModalProps = {
  content: "Menu" | "Validation" | "Selection";
}; */
export default function Modal(/* { content }: ModalProps */) {
  return (
    <div className="inset-0 fixed w-screen h-screen bg-darkGray bg-opacity-30 z-40">
      <ValidationMessage />
    </div>
  );
}
