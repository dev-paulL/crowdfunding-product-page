import ValidationMessage from "./ValidationMessage";

/* type ModalProps = {
  reason: "Menu" | "Validation";
}; */
export default function Modal(/* { reason }: ModalProps */) {
  return (
    <div className="inset-0 fixed w-screen h-screen bg-darkGray bg-opacity-30 z-40">
      <ValidationMessage />
    </div>
  );
}
