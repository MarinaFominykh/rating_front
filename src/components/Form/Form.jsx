import "./Form.css";
function Form({
  onSubmit,
  onClose,
  isOpen,
  title,
  children,
  button,
  isDisabled,
}) {
  return (
    <section className={`popup ${isOpen && "popup_opened"}`}>
      <form className="form" onSubmit={onSubmit} noValidate>
        <button type="button" className="form__close" onClick={onClose} />
        <h2 className="form__title">{title}</h2>
        <fieldset className="form__container">{children}</fieldset>
        <button
          type="submit"
          className="form__save"
          value={button}
          disabled={isDisabled}
        >
          {button}
        </button>
      </form>
    </section>
  );
}
export default Form;
