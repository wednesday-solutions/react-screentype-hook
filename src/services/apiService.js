import {
  getLatestApiClient,
  createApiClientWithTransform
} from "utils/apiUtils";
import UAParser from "ua-parser-js";

const parser = new UAParser()
let api = getLatestApiClient();
if (!getLatestApiClient()) {
  api = createApiClientWithTransform(process.env.BASE_URL);
}

function apiResponseHandler(apiPromise) {
  apiPromise
    .then(response => {
      const { data, ok } = response;
      if (ok) {
        return data;
      }
      throw new Error(JSON.stringify(data));
    })
    .catch(e => {
      throw e;
    });
}

export const validateUser = (userId, campaignId, hashedAccessToken) => {
  return apiResponseHandler(
    api
      .post(`/validate`, {
        userId,
        campaignId,
        hashedAccessToken
      })
      .then(response => {
        const { data, ok } = response;
        if (ok) {
          return data;
        }
        throw new Error(JSON.stringify(data));
      })
      .catch(e => {
        throw e;
      })
  );
};

export const offerRedeemed = (userId, campaignId) => {
  return apiResponseHandler(
    api.post(`/events`, {
      userId,
      campaignId,
      eventType: "OFFER_REDEEMED",
      metadata: parser.getResult()
    })
  );
};
