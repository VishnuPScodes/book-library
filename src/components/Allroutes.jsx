
import { Route, Routes } from "react-router-dom"

import { Home } from "../pages/Home/Home"
import { Romance } from "../pages/Romance/Romance"
import { RomanceBookDetails } from "../pages/Romance/RomanceBookDetails"
import { RomanceCard } from "../pages/Romance/RomanceCard"
import { RomanceLoader } from "../pages/Romance/RomanceLoader"

import { ItemnotFound } from "./ItemnotFound"
import { PagenotFound } from "./PagenotFound"
import { PrivateRoute } from "./PrivateRoute"
import { Admin } from "./Admin"
import { AdminLogin } from "./AdminLogin"
import { AddItem } from "./AddItem"
import { Explore } from "./Explore"
import { Children } from "../pages/Romance copy/Children"
import { ChildrenCard } from "../pages/Romance copy/ChildrenCard"
import { ChildrenLoader } from "../pages/Romance copy/ChildrenLoader"
import { ChildrenBookDetails } from "../pages/Romance copy/ChildrenBookDetails"
import { Wishlist } from "../pages/Wishlist/Wishlist"


export const Allroutes=(()=>{
    return <div>
<Routes>
    <Route  path="/" element={<Home/>}  />
    <Route  path="/Romance" element={<Romance/>}  />
    <Route  path="/RomanceCard" element={<RomanceCard/>}  />
    <Route  path="/RomanceLoader" element={<RomanceLoader/>}  />
    <Route  path="/RomanceBookDetails/:id" element={<RomanceBookDetails/>}/>

   
    
    <Route  path="/ItemnotFound" element={<ItemnotFound/>}/>
    <Route  path="*" element={<PagenotFound/>}/>
    <Route  path="/AdminLogin" element={<AdminLogin/>}/>
    <Route  path="/Admin" element={<PrivateRoute>
        <Admin/>
    </PrivateRoute>}/>
    <Route  path="Additem" element={<PrivateRoute>
        <AddItem/>
    </PrivateRoute>}/>
    <Route  path="/Explore" element={<Explore/>}/>
    {/* children section */}
    <Route  path="/Children" element={<Children/>}  />
    <Route  path="/RomanceCard" element={<ChildrenCard/>}  />
    <Route  path="/ChildrenLoader" element={<ChildrenLoader/>}  />
    <Route  path="/ChildrenBookDetails/:id" element={<ChildrenBookDetails/>}/>

    <Route  path="/Wishlist" element={<Wishlist/>}  />

   

</Routes>
</div>

})