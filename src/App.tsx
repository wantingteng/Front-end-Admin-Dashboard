import { useState } from 'react'
//import { Button } from 'antd'
//import { UpCircleOutlined } from '@ant-design/icons'
import {Link,  useRoutes} from "react-router-dom"
import router from "./router"


function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)

  return (
  
      <div className="App">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>

       {outlet}
      </div>
      
  
  )
}

export default App
