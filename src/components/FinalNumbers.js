const FinalNumbers = ({ finalTip, checkTotal }) => {
    const total = Number(finalTip) + Number(checkTotal);
  return (
    <>
      <div className="py-1">{`Tip Amount $${finalTip}`}</div>{" "}
      <div className="py-1">{`Total with Tip $${total.toFixed(2)}`}</div>
    </>
  );
};

export default FinalNumbers;
