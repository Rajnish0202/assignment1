import { lazy, Suspense } from 'react';
import './App.css';
const Home = lazy(() => import('./Home'));

function App() {
  return (
    <div className='app'>
      <header>
        <nav>
          <div className='logo'>
            <a href='/'>
              <img
                src='https://avatars.dicebear.com/api/micah/:seed.svg'
                alt='https://avatars.dicebear.com/api/micah/:seed.svg'
              />
            </a>
          </div>
          <div className='logoTitle'>
            <p>Assignment</p>
          </div>
        </nav>
      </header>
      <Suspense>
        <Home />
      </Suspense>
    </div>
  );
}

export default App;
