import Url from 'url';
import getUrlWithParamConfig from './getUrlWithParamConfig';

async function req<T>(endpoint: string, query: object): Promise<T | null> {
  const uri = Url.format(getUrlWithParamConfig(endpoint, query));

  try {
    return await fetch(uri).then((res) => res.json());
  } catch (error) {
    return null;
  }
}

export default req;
