import { type AppWindow } from './types/AppWindow';
import { useState } from 'react';
import './App.css'

function App() {
  const [windows, setWindows] = useState<AppWindow[]>([]);
  const [indexZ, setIndexZ] = useState(10);

  const openApp = (appType: 'terminal' | 'browser') => {
    const id = Math.random().toString(36);
    setWindows([...windows, {id, title: appType.toUpperCase(), component: appType, isOpen: true, zIndex: indexZ + 1}]);
    setIndexZ(indexZ + 1);
  }
  return (
    <>
    </>
  )
}

export default App
