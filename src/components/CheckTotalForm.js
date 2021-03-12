const CheckTotalForm = ({
  checkTotal,
  setCheckTotal,
}) => {
  return (
    <div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="addon-wrapping">
          $
        </span>
        <input
          type="number"
          className="form-control"
          placeholder="Check Total"
          value={checkTotal}
          onChange={(event) => setCheckTotal(event.target.value)}
        />
      </div>
    </div>
  );
};

export default CheckTotalForm;
