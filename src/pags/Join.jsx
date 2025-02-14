import BasicButtonTw from "../components/BasicButtonsTw";
import BasicTextField from "../components/BasicTextField";
import "../styles/Join.css";
import useStore from "../Routes/Zustand";
import ImageSlider from "../components/ImageSlider";
export default function Join() {
  const {
    setUsername,
    setPassword,
    setToggleBtn,
    ToggleBtn,
    Username,
    Password,
  } = useStore();
  return (
    <div className="join">
      <div className="image">
        <ImageSlider/>
      </div>
      <div className="login">
        <div className="login-container">
          <h1>Login</h1>
          <BasicTextField
            lable={"Username"}
            onChange={setUsername}
            value={Username}
                  />
          <BasicTextField
            lable={"Password"}
            onChange={setPassword}
            value={Password}
                  />
          <BasicButtonTw
            disabled={ToggleBtn}
            name={ToggleBtn ? "Logged in" : "Login"}
            onClick={setToggleBtn}
          />
        </div>
      </div>
    </div>
  );
}
