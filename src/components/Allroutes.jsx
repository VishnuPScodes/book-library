import { Children } from "react"
import { Route, Routes } from "react-router-dom"
import { ChildrenCard } from "../pages/Children/ChildrenCard"
import { ChildrenLoader } from "../pages/Children/ChildrenLoader"
import { Home } from "../pages/Home/Home"
import { Romance } from "../pages/Romance/Romance"
import { RomanceBookDetails } from "../pages/Romance/RomanceBookDetails"
import { RomanceCard } from "../pages/Romance/RomanceCard"
import { RomanceLoader } from "../pages/Romance/RomanceLoader"



export const Allroutes=(()=>{
    return <div>
<Routes>
    <Route  path="/" element={<Home/>}  />
    <Route  path="/Romance" element={<Romance/>}  />
    <Route  path="/RomanceCard" element={<RomanceCard/>}  />
    <Route  path="/RomanceLoader" element={<RomanceLoader/>}  />
    <Route  path="/RomanceBookDetails/:id" element={<RomanceBookDetails/>}/>

    <Route  path="/Children" element={<Children/>}  />
    <Route  path="/ChildrenCard" element={<ChildrenCard/>}  />
    <Route  path="/ChildrenLoader" element={<ChildrenLoader/>}  />
    <Route  path="/RomanceBookDetails/:id" element={<RomanceBookDetails/>}/>
    
</Routes>
</div>

})