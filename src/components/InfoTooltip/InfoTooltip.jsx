import "./InfoTooltip.css";
function InfoTooltip({ message, className }) {
  return <span className={`infotooltip ${className}`}>{message}</span>;
}
export default InfoTooltip;
