import { useEffect, useState } from 'react';

import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
  const [data, SetData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const response = await req<T>(endpoint, query);
        SetData(response);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return { data, isLoading, isError };
};

export default useData;
