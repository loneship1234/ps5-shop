import React from 'react'

// 
import Card from './components/card'
import CardSecondary from './components/CardSecondary'

function App() {
  return (
  <React.Fragment>
    <Card game='cyberpunk' theme='night' btnColor='btn-error'  badgeColor='badge-error' category_1='shotter' category_2='adventure' isNew={true}  text='this game is very good please buy it and make me milionare'/>
    {/* <CardSecondary game='dooms eternal' text='this game is very good please buy it and make me milionare'/> */}
    </React.Fragment>
  )
}

export default App