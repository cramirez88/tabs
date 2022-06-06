import React, { useState } from 'react'
import Tabs from './components/Tabs'
import TabContent from './components/TabContent'


function App() {
const tabsContent = [
  {tab: 1, content: 'Tab 1 content'},
  {tab: 2, content: 'Tab 2 content'},
  {tab: 3, content: 'Tab 3 content'}
]
const [tabsArray, setTabsArray] = useState(tabsContent)
const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <Tabs tabsArray={tabsArray} setTabsArray={setTabsArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabContent tabsArray={tabsArray} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}

export default App;
