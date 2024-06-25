const StepTwo = ({ userName, email, password, setStep }) => {
  return (
    <div className="results">
      <div>
        <span>Name : {userName}</span>
        <span>Email : {email}</span>
        <span>Password : {password}</span>
      </div>
      <button className="back-button" onClick={setStep(1)} type="submit">
        Edit your information
      </button>
    </div>
  );
};
export default StepTwo;
