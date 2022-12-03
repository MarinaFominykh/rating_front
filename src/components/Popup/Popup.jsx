import "./Popup.scss";

function Popup({ isOpen, className, children }) {
  return (
    <aside
      className={`popup popup_type_${className} ${isOpen && "popup_opened"}`}
    >
      {children}
    </aside>
  );
}
export default Popup;
