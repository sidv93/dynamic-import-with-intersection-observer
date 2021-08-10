import React, { useState, lazy, Suspense } from 'react'
import logo from './logo.svg'
import './App.css';

const LazyComponent = lazy(() => import('./LazyComponent'));
import { useInView } from 'react-intersection-observer';

function App() {
  const [count, setCount] = useState(0);


  const { ref, inView } = useInView({
    threshold: 0.0,
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <div>
        <p className="random-content">Random content which takes up a lot of space</p>
        <p className="random-content">Random content which takes up a lot of space</p>
        <p className="random-content">Random content which takes up a lot of space</p>
        <p className="random-content">Random content which takes up a lot of space</p>
        <p className="random-content">Random content which takes up a lot of space</p>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div ref={ref}>
          {inView && <LazyComponent />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
