// This component is to display the content of the tab clicked


import React from 'react'

const TabContent = (props) => {
  const {tabsArray, selectedTab, setSelectedTab} = props
  return (
    <div>{tabsArray[selectedTab].content}</div>
  )
}

export default TabContent