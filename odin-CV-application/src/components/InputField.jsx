import "../styles/style.css";

const InputField = ({ inputLabel, input, setState, setStateCallback }) => {
  return (
    <div className="input-container">
      <label className="input-label">{inputLabel}</label>
      <input
        onChange={(event) => {
          setState(event.target.value);
          setStateCallback(event.target.value);
        }}
        type="text"
        className="input-field"
        value={input}
      ></input>
    </div>
  );
};

export default InputField;
