import "./Error.scss";
function Error({ error }) {
  return <span className="error">{error || ""}</span>;
}

export default Error;
