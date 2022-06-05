import React, { useState } from 'react'
import Tabs from './components/Tabs'

function App() {
 const [tab, setTab] = useState({
   tab: 0,
   content: ['Tab 1 content', 'Tab 2 Content', 'Tab 3 Content']
 })

  return (
    <div>
     <Tabs tab={tab} setTab={setTab} />
    </div>
  );
}

export default App;
