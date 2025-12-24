import React, { useState } from 'react';
import { Experience } from './components/Experience';
import { UI } from './components/UI';
import { SceneState } from './types';

function App() {
  const [sceneState, setSceneState] = useState<SceneState>(SceneState.TREE_SHAPE);

  return (
    <div className="w-full h-screen bg-[#021209] overflow-hidden">
      <Experience sceneState={sceneState} />
      <UI sceneState={sceneState} setSceneState={setSceneState} />
    </div>
  );
}

export default App;
