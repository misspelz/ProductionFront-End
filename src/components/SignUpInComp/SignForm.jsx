import { useEffect, useState } from "react";
import ActionButton from "../Commons/Button";
import InputField from "../Commons/InputField";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { url } from "../../utils";
import Lottie from "lottie-react";
import preloader from "../../pages/Home/Animation - 1703321875032 (1).json";
import toast from "react-hot-toast";
import { Register } from "services/auth&poll";

const SignForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  localStorage.setItem("email", email);

  const signupUser = async (event) => {
    event.preventDefault();

    if (!allFieldsFilled) {
      return;
    }

    setIsLoading(true);

    const userData = {
      username: username,
      email: email,
      password: password,
    };

    try {
      const response = await Register(userData);
      console.log("reg_res", response);

      localStorage.setItem("registrationData", JSON.stringify(response.data));

      if (response.status === 201) {
        const token = response.data.token;

        localStorage.setItem("authTOken", token);

        navigate("/verify");
      }
    } catch (error) {
      console.log(error);
      console.log(error.message);
      toast.error(
        error.response.data.message ||
          error.response.data.detail ||
          "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (email.trim() && username.trim() && password.trim()) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  }, [email, username, password]);

  return (
    <div className="sign-form">
      <div className="create-ead-txt text-red-500">Create an Account</div>
      <div className="greet-txt">
        Welcome to 2geda! <br /> To continue, please provide your details
      </div>

      <form action="" onSubmit={signupUser}>
        <div className="inp-email">
          <InputField
            placeholder={"Input email address"}
            type={"text"}
            value={email}
            onChange={handleEmailChange}
          />
          <div className="ins-bx-txt">
            We’ll verify the email provided to be sure it belongs to you
          </div>
        </div>

        <InputField
          placeholder={"Username"}
          type={"text"}
          name="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <div className="pass-con">
          <InputField
            placeholder={"Create Password"}
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="eye-box" onClick={togglePasswordVisibility}>
            {passwordVisible ? (
              <BsEyeSlashFill className="eye-icon" />
            ) : (
              <BsEyeFill className="eye-icon" />
            )}
          </div>
        </div>
        <div className="btn-continu">
          {isLoading ? (
            <Lottie
              animationData={preloader}
              style={{
                width: "300px",
                height: "100px",
              }}
            />
          ) : (
            <ActionButton
              onClick={signupUser}
              label={"Continue"}
              bg={"pruplr"}
              type={"submit"}
            />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink
            to="/Signin"
            className="alr-ave"
            style={{ color: "#4f0da3" }}
          >
            Already have an account? &nbsp;
            <span style={{ fontSize: "14px" }}>Sign In</span>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
