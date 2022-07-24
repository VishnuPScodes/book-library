
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

import { Wishlist } from "../pages/Wishlist/Wishlist"
import { Shortstory } from "../pages/shortstory/Shortstory"
import { ShortStoryCard } from "../pages/shortstory/ShortStoryCard"
import { ShortStoryLoader } from "../pages/shortstory/ShortStoryLoader"
import { ShortStoryBookDetails } from "../pages/shortstory/ShortStoryBookDetails"
import { Classics } from "../pages/classics/Classics"
import { ClassicsCard } from "../pages/classics/ClassicsCard"
import { ClassicsLoader } from "../pages/classics/ClassicsLoader"
import { ClassicsBookDetails } from "../pages/classics/ClassicsBookDetails"


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


    <Route  path="/Wishlist" element={<Wishlist/>}  />
    

    {/* Short stories */}
    <Route  path="/Shortstory" element={<Shortstory/>}  />
    <Route  path="/ShortStoryCard" element={<ShortStoryCard/>}  />
    <Route  path="/ChildrenLoader" element={<ShortStoryLoader/>}  />
    <Route  path="/ShortStoryBookDetails/:id" element={<ShortStoryBookDetails/>}/>
   
   {/* Classics */}
   <Route  path="/Classics" element={<Classics/>}  />
    <Route  path="/ClassicsCard" element={<ClassicsCard/>}  />
    <Route  path="/ClassicsLoader" element={<ClassicsLoader/>}  />
    <Route  path="/ClassicsBookDetails/:id" element={<ClassicsBookDetails/>}/>

</Routes>
</div>

})