import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home"
import MillionaireGame from "../quiz/MillionaireGame";
import Dashboard from "../dashboard/Dashboard";
import About from "../about/About";
import Faq from "../faq/Faq";






const AllRoutes = () => {
   

    return (


        <BrowserRouter>
            <Layout>
            <Routes>
            <Route  path="/" element={<Home />} />
            <Route path='/millionaire-game' element={<MillionaireGame/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/faq' element={<Faq/>}/>

                </Routes>

                
            </Layout>
        </BrowserRouter>


    );
}

export default AllRoutes;
