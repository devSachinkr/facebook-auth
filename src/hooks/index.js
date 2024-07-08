import { useAuth } from "../provider/auth-provider";

export const useExtractPageData = () => {
  const { pageDetails } = useAuth();

  if (!pageDetails) {
    // Handle case where pageDetails is undefined
    return {
      getImpressionDataValue: 0, // or any default value you prefer
      getFollowerDataValue: 0, // or any default value you prefer
      pagePostEngagements: 0,
      pagePostReactions: 0,
    };
  }

  if (!pageDetails) return;
  const getImpressionDataValue = pageDetails?.filter(
    (item) => item.name === "page_impressions"
  )[0]?.values[0].value;
  const getFollowerDataValue = pageDetails?.filter(
    (item) => item.name === "page_daily_follows_unique"
  )[0]?.values[0].value;

  const pagePostEngagements = pageDetails?.filter(
    (item) => item.name === "page_post_engagements"
  )[0]?.values[0].value;

  let pagePostReactions = pageDetails?.filter(
    (item) => item.name === "page_actions_post_reactions_like_total"
  )[0]?.values[0].value;

    
  return {
    getImpressionDataValue,
    getFollowerDataValue,
    pagePostEngagements,
    pagePostReactions,
  };
};
