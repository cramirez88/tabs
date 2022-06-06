import React, {useState} from 'react'


const Tabs = (props) => {
  const {tabsArray, setTabsArray, tabsContent, selectedTab, setSelectedTab} = props
  // When we click on a tab, we want to switch the content. Currently it is in an array



  return (
    <div>
    {tabsArray.map((tab, index) => (
      <div onClick={() => {setSelectedTab(index)}} key={index}>Tab {tab.tab} </div>
    ))}
    </div>
  )
}

  




export default Tabs