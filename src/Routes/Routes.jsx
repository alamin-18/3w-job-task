import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import FAQ from "../Pages/FAQ/FAQ";
import ETHTable from "../Pages/Home/ETHTable/ETHTable";
import Home from "../Pages/Home/Home/Home";
import TestLinkTable from "../Pages/Home/TestLinkTable/TestLinkTable";
import LogIn from "../Pages/LogIn/LogIn";
import SingUp from "../Pages/SingUp/SingUp";


const router = createBrowserRouter([
    {path:'/',element:<Main></Main>,children:[
        {path:'/',element:<Home></Home>,children:[
            {path:'/',element:<ETHTable></ETHTable>},
            {path:'/eth',element:<ETHTable></ETHTable>},
            {path:'/testlink',element:<TestLinkTable></TestLinkTable>},
        ]},
        {path:'/login',element:<LogIn></LogIn>},
        {path:'/singup',element:<SingUp></SingUp>},
        {path:'/faq',element:<FAQ></FAQ>},
    ]}
])
export default router;