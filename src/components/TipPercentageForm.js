const TipPercentageForm = ({
  setTipPercentage,
  percentOptions,
}) => {
  return (
    <div className="pt-2">
      {percentOptions.map((option, i) => (
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id={`radio${i + 1}`}
            value={option}
            onChange={(event) => setTipPercentage(event.target.value)}
          />
          <label className="form-check-label" htmlFor={`radio${i + 1}`}>
            {`${option}%`}
          </label>
        </div>
      ))}
    </div>
  );
};

export default TipPercentageForm;
