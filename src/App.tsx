import { useState } from 'react'
import { Button } from 'antd'
import { UpCircleOutlined } from '@ant-design/icons'



function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className="App">
        顶级组件
        <Button type="primary">buttonq</Button>
        <UpCircleOutlined />
      </div>
      
  
  )
}

export default App
