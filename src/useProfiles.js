import { useState, useEffect } from 'react';
import { getProfiles } from './axios';

const useProfiles = (limitNum = 3) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState({});
  const [hasNextProfile, setHasNextProfile] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);
    setError({});

    const controller = new AbortController();
    const { signal } = controller;

    getProfiles(limitNum, { signal })
      .then((data) => {
        setResults((prev) => [...prev, ...data]);
        setHasNextProfile(Boolean(data.length));
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        if (signal.aborted) return;
        setIsError(true);
        setError({ message: e.message });
      });
    return () => controller.abort();
  }, [limitNum]);

  return { isLoading, isError, error, results, hasNextProfile };
};

export default useProfiles;
