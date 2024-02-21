import React, { useState } from "react";
import { HiOutlineKey } from "react-icons/hi";
import "react-phone-number-input/style.css";
import InputField from "../Commons/InputField";
import ActionButton from "../Commons/Button";
import "./style.css";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import toast from "react-hot-toast";
import { ResetPassword, ReSendOTP } from "services/auth&poll";

const ForgotComponent = () => {
  const [loading, setLoading] = useState(false);
  const [isloading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showFullForm, setShowFullForm] = useState(false);

  const [otp, setOtp] = useState("");

  const handleOTPChange = (event) => {
    const trimmedOtp = event.target.value.trim();
    if (trimmedOtp.length <= 5) {
      setOtp(trimmedOtp);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleEmailChange = (event) => {
    const trimmedEmail = event.target.value.trim();
    setEmail(trimmedEmail);
  };

  const handlePasswordChange = (event) => {
    const trimmedPassword = event.target.value.trim();
    setPassword(trimmedPassword);
  };

  const resetData = {
    email: email,
    otp: otp,
    password: password
  };

  console.log("resetData", resetData)

  const HandleResetPassword = async (e) => {
    setLoading(true);

    if(!email || !password || !otp){
      toast.error("Input your credentials")
      return
    }

    try {
      setLoading(true);

      const response = await ResetPassword(resetData);
      console.log("resetres", response);

      // if (response.status === 200) {
      //   toast.success(response.response);
      //   setTimeout(() => {
      //     nav("/Signin");
      //   }, 3000);
      // }

    } catch (error) {
      console.log("Reseterror", error);
      toast.error(
        error.response.data.message ||
          error.response.data.error ||
          "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  const HandleSendOTP = async () => {
    try {
      setIsLoading(true);
      const response = await ReSendOTP("password_reset");
      console.log("resetotp_res", response);
      if (response.status === 200) {
        toast.success(response.data.message);
        setShowFullForm(true);
      }
    } catch (error) {
      toast.error(
        error.response.data.message ||
          error.response.data.error ||
          "An error occurred"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="for-pass-comp-cont">
      <div className="key-cont ">
        <HiOutlineKey size={20} />
      </div>
      <h2 className="text-center my-8 lg:text-[18px]">Reset your Password</h2>

      <div className="btn-continu upp">
        {!showFullForm && (
          <ActionButton
            onClick={HandleSendOTP}
            label={isloading ? "Loading" : "Get OTP"}
            bg={"pruplr"}
            className="mt-6 w-full"
            loading={isloading}
          />
        )}
      </div>

      {showFullForm && (
        <>
          
          <div className="ins-bx-txt text-center text-purple-800 font-bold lg:text-[30px]">
            Input your email address, OTP and your new password
          </div>
          <div className="inp-email">
            <InputField
              placeholder={"Enter email address"}
              type={"text"}
              value={email}
              onChange={handleEmailChange}
            />
            <div className="pass-con">
              <InputField
                placeholder={"Enter new password"}
                type={passwordVisible ? "text" : "password"}
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
              <InputField
              placeholder={"Enter OTP"}
              type={"text"}
              value={otp}
              onChange={handleOTPChange}
            />
            </div>
          </div>
          <div className="btn-continu upp">
            <ActionButton
              onClick={HandleResetPassword}
              label={"Submit"}
              bg={"pruplr"}
              className="mt-6 w-full"
              loading={loading}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ForgotComponent;
