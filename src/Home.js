import { useState, useRef, useCallback } from 'react';
import Card from './component/Card';
import './Home.css';
import useProfiles from './useProfiles';

const Home = () => {
  const [limitNum, setLimitNum] = useState(3);
  const { isLoading, isError, error, results, hasNextProfile } = useProfiles(limitNum);

  const intObserver = useRef();
  const lastProfileRef = useCallback(
    (profile) => {
      if (isLoading) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((profiles) => {
        if (profiles[0].isIntersecting && hasNextProfile) {
          console.log('We are near the last post! ');
          setLimitNum((prev) => prev + 3);
        }
      });
      if (profile) intObserver.current.observe(profile);
    },
    [isLoading, hasNextProfile]
  );

  if (isError) return <p className='error'>Error: {error.message}</p>;

  return (
    <div className='container'>
      {results.map((profile, i) => {
        if (results.length === i + 1) {
          console.log('last element');
          return <Card isLoading={isLoading} profile={profile} key={profile.id} ref={lastProfileRef} />;
        } else {
          return <Card isLoading={isLoading} profile={profile} key={profile.id} />;
        }
      })}
    </div>
  );
};

export default Home;
