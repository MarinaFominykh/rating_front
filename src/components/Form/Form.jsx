import "./Form.css";
function Form({ onSubmit, onClose, isOpen, title, children, button }) {
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <form className="form" onSubmit={onSubmit}>
        <button type="button" className="form__close" onClick={onClose} />
        <h2 className="form__title">{title}</h2>
        <fieldset className="form__container">{children}</fieldset>
        <button type="submit" className="form__save" value="сохранить">
          {button}
        </button>
      </form>
    </section>
  );
}
export default Form;
