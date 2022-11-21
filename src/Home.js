import { useEffect, useState, Suspense, lazy } from 'react';
import './Home.css';

const Card = lazy(() => import('./component/Card'));

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  const fetchProfile = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    setProfiles(data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className='container'>
      {profiles.map((profile) => (
        <Suspense
          key={profile.id}
          fallback={
            <img
              src='https://avatars.dicebear.com/api/micah/:seed.svg?size=150'
              alt='https://avatars.dicebear.com/api/micah/:seed.svg'
            />
          }
        >
          <Card profile={profile} />
        </Suspense>
      ))}
    </div>
  );
};

export default Home;
