import { useState } from "react";

const FormWrapper = ({ render }) => {
  const [checkTotal, setCheckTotal] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [finalTip, setFinalTip] = useState(0);
  const calculateTip = () => {
    setFinalTip((checkTotal * (tipPercentage / 100)).toFixed(2));
  };

  return (
    <div className="card mx-auto p-3" style={{ width: "50vw" }}>
      <div className="card-body">
        <h2 className="card-title pb-2">Tip Calculator</h2>
        {render(
          checkTotal,
          setCheckTotal,
          tipPercentage,
          setTipPercentage,
          finalTip
        )}
      </div>
      <button className="btn btn-secondary" onClick={() => calculateTip()}>
        Calculate
      </button>
    </div>
  );
};

export default FormWrapper;
