import "./App.css";
import FormWrapper from "./components/FormWrapper";
import CheckTotalForm from "./components/CheckTotalForm";
import TipPercentageForm from "./components/TipPercentageForm";
import FinalNumbers from "./components/FinalNumbers";

const App = () => {
  return (
    <div className="backG container-fluid pt-3" style={{ height: "100vh" }}>
      <FormWrapper
        render={(
          checkTotal,
          setCheckTotal,
          tipPercentage,
          setTipPercentage,
          finalTip
        ) => {
          return (
            <>
              <CheckTotalForm
                checkTotal={checkTotal}
                setCheckTotal={setCheckTotal}
              />
              <TipPercentageForm
                tipPercentage={tipPercentage}
                setTipPercentage={setTipPercentage}
                percentOptions={[15, 25, 30, 55, 60, 78, 89]}
              />
              <FinalNumbers finalTip={finalTip} checkTotal={checkTotal} />
            </>
          );
        }}
      />
    </div>
  );
};

export default App;
