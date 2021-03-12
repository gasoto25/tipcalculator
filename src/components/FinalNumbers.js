import {useEffect} from 'react';

const FinalNumbers = ({ finalTip, finalTotal, calculateTip }) => {
  useEffect(() => {calculateTip()}, [finalTotal, finalTip, calculateTip]);
  return (
    <>
      <div className="pt-3">{`Tip Amount $${finalTip}`}</div>
      <div className="pt-1">{`Total with Tip $${finalTotal.toFixed(2)}`}</div>
    </>
  );
};

export default FinalNumbers;
