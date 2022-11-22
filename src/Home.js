import { useState, useRef, useCallback } from 'react';
import Card from './component/Card';
import './Home.css';
import useProfiles from './useProfiles';

const Home = () => {
  const [pageNum, setPageNum] = useState(1);
  const { isLoading, isError, error, results, hasNextPage } = useProfiles(pageNum);

  const intObserver = useRef();
  const lastProfileRef = useCallback(
    (profile) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((profiles) => {
        if (profiles[0].isIntersecting && hasNextPage) {
          console.log('We are near the last post! ');
          setPageNum((prev) => prev + 1);
        }
      });
      if (profile) intObserver.current.observe(profile);
    },
    [isLoading, hasNextPage]
  );

  if (isError) return <p className='error'>Error:{error.message}</p>;

  return (
    <div className='container'>
      {results.map((profile, i) => {
        if (results.length === i + 1) {
          console.log('last element');
          return <Card isLoading={isLoading} profile={profile} key={profile.id} ref={lastProfileRef} />;
        }
        return <Card isLoading={isLoading} profile={profile} key={profile.id} />;
      })}
    </div>
  );
};

export default Home;
