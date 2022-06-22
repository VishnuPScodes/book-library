import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Romance } from "../pages/Romance/Romance"
import { RomanceCard } from "../pages/Romance/RomanceCard"
import { RomanceLoader } from "../pages/Romance/RomanceLoader"



export const Allroutes=(()=>{
    return <div>
<Routes>
    <Route  path="/" element={<Home/>}  />
    <Route  path="/Romance" element={<Romance/>}  />
    <Route  path="/RomanceCard" element={<RomanceCard/>}  />
    <Route  path="/RomanceLoader" element={<RomanceLoader/>}  />
    
</Routes>
</div>

})