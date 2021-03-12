import { useState } from "react";
import CheckTotalForm from "./CheckTotalForm";
import TipPercentageForm from "./TipPercentageForm";
import FinalNumbers from "./FinalNumbers";

const FormWrapper = () => {
  const [checkTotal, setCheckTotal] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [finalTip, setFinalTip] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  const calculateTip = () => {
    setFinalTip((checkTotal * (tipPercentage / 100)).toFixed(2));
    setFinalTotal(Number(finalTip) + Number(checkTotal));
  };

  return (
    <div className="card mx-auto p-3" style={{ width: "50vw" }}>
      <div className="card-body">
        <h2 className="card-title pb-2">Tip Calculator</h2>
        <CheckTotalForm checkTotal={checkTotal} setCheckTotal={setCheckTotal} />
        <TipPercentageForm
          setTipPercentage={setTipPercentage}
          percentOptions={[10, 15, 20, 25, 30]}
        />
        <FinalNumbers finalTip={finalTip} finalTotal={finalTotal}  calculateTip={calculateTip}/>
      </div>
    </div>
  );
};

export default FormWrapper;
