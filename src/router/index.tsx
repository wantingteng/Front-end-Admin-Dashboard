import Home from "../views/Home"
import Page1 from "../views/Page1"
import Page2 from "../views/Page2"
import { Navigate } from "react-router-dom"


const routes = [
    {
        path:"/",
        element:<Navigate to="/page1"/>
    },
    {
        path:"/",
        element:<Home />,
        children:[
            {
                path:"/page1",
                element:<Page1/>
            },
            {
                path:"/page2",
                element:<Page2 />
            }

        ]
    },
    
]

export default routes 