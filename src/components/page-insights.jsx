import React from "react";
import { useAuth } from "../provider/auth-provider";

import { useExtractPageData } from "../hooks";

const PageInsights = () => {
  const { pageDetails } = useAuth();
  const {
    getImpressionDataValue,
    getFollowerDataValue,
    pagePostEngagements,
    pagePostReactions,
  } = useExtractPageData();
  console.log(pageDetails);
  if (!pageDetails) return;

  return pageDetails ? (
    <div className="flex items-center justify-center bg-gradient-to-r from-lime-500 to-pink-500 h-screen text-2xl">
      <div className="flex flex-col items-center justify-center w-[60vw] h-60 text-white ">
        <span className="mt-3">
          Total Impression :{getImpressionDataValue}{" "}
        </span>
        <span className="mt-3">
          Total Follower :{getFollowerDataValue | "0"}
        </span>
        <span className="mt-3">
          Total Page Post Engagments : {pagePostEngagements}
        </span>
        <span className="mt-3">
          Total Page Post Like 👍 Reactions : {pagePostReactions}
        </span>
      </div>
    </div>
  ) : (
    <div>no</div>
  );
};

export default PageInsights;
