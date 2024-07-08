export const getPageFetchUrl = (pageId, since, until,pageAccessToken) => {
  if(!pageId && !pageAccessToken) throw new Error('Page id cannot be empty');
  return `
    ${pageId}/insights?metric=page_impressions,page_daily_follows_unique,page_post_engagements,page_actions_post_reactions_like_total&since=${since}&until=${until}&access_token=${pageAccessToken}&period=total_over_range
  `;
};


