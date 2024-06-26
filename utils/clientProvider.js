import { ApiVersion } from "@shopify/shopify-api";
import sessionHandler from "./sessionHandler.js";
import shopify from "./shopifyConfig.js";

const currentApiVersion = ApiVersion.January23;

//To Store Shop + OPENAI API KEY ==> Create new fetchSessionId function, use StoreModel to get shop name from Session ID, store OPEN AI API key with shop name as id

const fetchSession = async ({ req, res, isOnline }) => {
  //false for offline session, true for online session
  const sessionId = await shopify.session.getCurrentId({
    isOnline: isOnline,
    rawRequest: req,
    rawResponse: res,
  });
  const session = await sessionHandler.loadSession(sessionId);
  return session;
};

const graphqlClient = async ({ req, res, isOnline }) => {
  const session = await fetchSession({ req, res, isOnline });
  const client = new shopify.clients.Graphql({ session });
  const { shop } = session;
  return { client, shop, session };
};

const restClient = async ({ req, res, isOnline }) => {
  const session = await fetchSession({ req, res, isOnline });
  const client = new shopify.clients.Rest({
    session,
    apiVersion: currentApiVersion,
  });
  const { shop } = session;
  return { client, shop, session };
};

const fetchOfflineSession = async (shop) => {
  const sessionID = shopify.session.getOfflineId(shop);
  const session = await sessionHandler.loadSession(sessionID);
  return session;
};

const offline = {
  graphqlClient: async ({ shop }) => {
    const session = await fetchOfflineSession(shop);
    const client = new shopify.clients.Graphql({ session });
    return { client, shop, session };
  },
  restClient: async ({ shop }) => {
    const session = await fetchOfflineSession(shop);
    const client = new shopify.clients.Rest({
      session,
      apiVersion: currentApiVersion,
    });
    return { client, shop, session };
  },
};

const clientProvider = { graphqlClient, restClient, offline };

export default clientProvider;
