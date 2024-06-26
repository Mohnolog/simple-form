import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";
library.add(faEye);

function App() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setErrorPassword(true);
      alert("Vos mots de pass doivent être identiques");
    } else {
      setErrorPassword(false);
      console.log("Ce qu'il y a dans le state : ", [userName, email, password]);
      setStep(2);
    }
  };

  return (
    <main>
      {step === 1 && <h1>Create account</h1>}
      {step === 2 && <h1>Results</h1>}
      {step === 1 && (
        <Form
          handleSubmit={handleSubmit}
          userName={userName}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
          confirm={confirm}
          setConfirm={setConfirm}
          password={password}
          setPassword={setPassword}
          errorPassword={errorPassword}
          setErrorPassword={setErrorPassword}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          setStep={setStep}
        />
      )}
      {step === 2 && (
        <StepTwo
          userName={userName}
          email={email}
          password={password}
          setStep={setStep}
        />
      )}
    </main>
  );
}

export default App;
