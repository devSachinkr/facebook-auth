import React from "react";
import UserPage from "./user-page";
import { useAuth } from "../provider/auth-provider";

const FacebookLogin = () => {
  const { checkLoginStates, userData, handleLogin } = useAuth();

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 via-blue-500 to-blue-700 ">
      {!userData && (
        <div
          className="fb-login-button border-[2px] border-white rounded-md"
          data-width=""
          data-size="large"
          data-button-type="login_with"
          data-layout="default"
          data-auto-logout-link="false"
          data-use-continue-as="false"
          data-scope="public_profile,email"
          data-onlogin={checkLoginStates}
          data-config_id={`${process.env.REACT_APP_FACEBOOK_CONFIG_ID}`}
          onClick={() => handleLogin()}
        ></div>
      )}

      {userData && <UserPage />}
    </div>
  );
};

export default FacebookLogin;
