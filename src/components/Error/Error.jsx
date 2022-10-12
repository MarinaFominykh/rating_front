import "./Error.css";
function Error({ error }) {
  return <span className="error">{error || ""}</span>;
}

export default Error;
