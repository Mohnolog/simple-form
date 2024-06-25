import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Form = ({
  handleSubmit,
  userName,
  email,
  password,
  confirm,
  errorPassword,
  setUserName,
  setEmail,
  setPassword,
  setConfirm,
  setErrorPassword,
  errorMessage,
  setErrorMessage,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="name"
          onChange={(event) => {
            setUserName(event.target.value);
          }}
          value={userName}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Your Email adress"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          value={email}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type={showPassword ? "text" : "password"}
          // autocomplete="new-password"
          placeholder="password"
          onChange={(e) => {
            setErrorPassword(false);
            setPassword(e.target.value);
            if (password.length < 8) {
              setErrorMessage("Your password must be at least 8 characters !");
            } else {
              setErrorMessage("");
              // console.log(password);
            }
          }}
          className={`${errorPassword && "redBorder"}`}
          value={password}
        />
        <FontAwesomeIcon
          icon="fa-solid fa-eye"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div>
        <label htmlFor="confirm">Confirm your password</label>
        <input
          id="confirm"
          type={showConfirmPassword ? "text" : "password"}
          // autocomplete="new-password"
          placeholder="confirm password"
          onChange={(event) => {
            setConfirm(event.target.value);
          }}
          className={`${errorPassword && "redBorder"}`}
          value={confirm}
        />
        <FontAwesomeIcon
          icon="fa-solid fa-eye"
          onClick={() => {
            setShowConfirmPassword(!showConfirmPassword);
          }}
        />
      </div>
      <input className="submit" value="Register" type="submit" />
    </form>
  );
};
export default Form;
