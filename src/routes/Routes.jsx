import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home/Home";
import AddCoffie from "../pages/addcoffie/AddCoffie";
import VeiwCoffie from "../pages/veiwCoffie/VeiwCoffie";
import OurCoffei from "../pages/home/ourcoffie/OurCoffei";
import UpdateCoffie from "../pages/updateCoffie/UpdateCoffie";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },

        ]
    },
    {
        path: '/addcoffie',
        element: <AddCoffie />
    },
    {
        path: '/veiwcoffe/:id',
        element: <VeiwCoffie />,
        loader:({params})=>fetch(`http://localhost:5000/coffie/${params.id}`)
    },
    {
        path: '/coffe',
        element: <OurCoffei />
    },
    {
        path:'/updateCoffie',
        element:<UpdateCoffie />
    }

])
export default router