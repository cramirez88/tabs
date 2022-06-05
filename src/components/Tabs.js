import React from 'react'


const Tabs = (props) => {
  const {tab, setTab} = props

  const handleTab = (index) => {
    setTab({
      ...tab,
      tab: index
  })
  }
  return (
    <div>
      {tab.content.map((t, index) => (
        <div key={index} onClick={() => {handleTab(index)}}>Tab {index + 1}</div>
      ))}
      
        <div>{tab.content[tab.tab]}</div>

    </div>
  )
}


export default Tabs