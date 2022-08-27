import "./OptionMatch.css";
function OptionMatch({ title, matchId }) {
  return <option value={matchId}>{title}</option>;
}

export default OptionMatch;
