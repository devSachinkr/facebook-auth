import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getPageFetchUrl } from "../constants";
import { useNavigate } from "react-router-dom";

const initialState = {
  userData: {},
  pages: [],
  loading: false,
  pageDetails: {},
  checkLoginStates: () => {},
  pageId: null,
  setPageId: () => {},
  fetchPageInsights: () => {},
  setPageAccessToken: () => {},
};
const Authcontext = createContext(initialState);
console.log(process.env.REACT_APP_FACEBOOK_APP_ID)
export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageDetails, setPageDetails] = useState(null);
  const isFacebookInitialized = useRef(false);
  const [pages, setPages] = useState([]);
  const [pageAccessToken, setPageAccessToken] = useState(null);
  const [pageId, setPageId] = useState(null);
  const navigate = useNavigate();
  let checkLoginStates;
  const initFacebook = () => {
    if (isFacebookInitialized?.current) {
      return;
    }
    function statusChangeCallback(response) {
      if (response.status === "connected") {
        fetchUser();
        fetchPages();
      }
    }
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: process.env.REACT_APP_FACEBOOK_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v17.0",
      });

      checkLoginStates = function checkLoginState() {
        window.FB.getLoginStatus(function (response) {
          statusChangeCallback(response);
        });
      };

      window.FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");

    isFacebookInitialized.current = true;
  };

  function fetchUser() {
    setLoading(true);
    window.FB.api("/me", { fields: "name,email,picture" }, function (response) {
      if (response) {
        setUserData(response);
        setLoading(false);
      } else {
      }
    });
  }

  const fetchPages = () => {
    setLoading(true);
    window.FB.api("/me/accounts", function (response) {
      if (response && !response.error) {
        setPages(response);
        setPageAccessToken(response.data.access_token)
        setLoading(false);
      } else {
        setLoading(false);
        console.log(response.error);
      }
    });
  };

  const fetchPageInsights = (pageId) => {
    const date = new Date();
    // current date
    const until = date.toISOString().split("T")[0];
    // last 30 days
    const since = new Date(date.setDate(date.getDate() - 30))
      .toISOString()
      .split("T")[0];
    const url = getPageFetchUrl(pageId, since, until,pageAccessToken);
    setLoading(true);
    window.FB.api(url, (res) => {
      if (res && !res.error) {
        setPageDetails(res.data);
        setLoading(false);
        navigate('/pages')
      } else {
        setPageDetails(null);
        setLoading(false);
        console.log(res.error);
      }
    });
  };

  const handleLogin = () => {
    window.FB.login(checkLoginStates, {
      scope: "email,public_profile,pages_show_list,pages_read_engagement",
    });
  };
  useEffect(() => {
    initFacebook();
  }, []);
  useEffect(()=>{
    if(pageId){
      const currentPageAccessToken=pages?.data?.filter(page=>page.id===pageId)[0].access_token
      setPageAccessToken(currentPageAccessToken)
    }
  },[pageId])
  const value = {
    userData,
    pages,
    loading,
    pageDetails,
    checkLoginStates,
    fetchPageInsights,
    pageId,
    setPageId,
    setPageAccessToken,
  };
  return <Authcontext.Provider value={value}>{children}</Authcontext.Provider>;
};

export const useAuth = () => {
  const context = useContext(Authcontext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
