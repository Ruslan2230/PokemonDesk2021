import config from '../config';

function getUrlWithParamConfig(endpointConfig: any, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].url,
    query: {
      ...query,
    },
  };
  return url;
}

export default getUrlWithParamConfig;
