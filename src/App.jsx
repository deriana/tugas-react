import { useState } from 'react'
import './App.css'
import Message from './component/message'
import ListGroup from './component/ListGroup'
import AlertDeri from './component/Alert'

function App() {
  const [count, setCount] = useState(0)

  let items = ["England", "France", "Germany", "Italy", "Spain", "Portugal", "Netherlands", "Belgium", "Austria", "Switzerland"]

  const handleSelectItem = (index) => {
    console.log(`Selected item: ${items[index]}`)
  }

  return (
    <div className="App">
      <Message />
      <ListGroup items={items} heading="Countries" onSelectItem={handleSelectItem}/>

      <div>
        <AlertDeri>
          Hello <span>World</span>
        </AlertDeri>
      </div>
    </div>
  )
}

export default App
