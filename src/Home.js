import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link,Router,Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import Admin from './My/Admin';
import Addproduct from './My/Addproduct';
import Listproduct from './My/Listproduct';
import Editproduct from './My/Editproduct';
import Addcategore from './My/Addcategore';
import Listcategore from './My/Listcategore';
import Editcategore from './My/Editcategore';
import Addsub from './My/Addsub'; 
import Orderlist from './My/Orderlist';
import Listsub from './My/Listsub';
import Custmerlist from './My/Custmerlist';
import Addcolor from './My/Addcolor';
import Orderdetails from './My/Orderdetails'; 
import Listcolor from './My/Listcolor'; 
import Invoice from './My/Invoice'; 

import Addattribute from './My/Addattribute'; 
import Deletedproduct from './My/Deletedproduct'; 
import Attributvalue from './My/Attributvalue'; 

function Home()
{
   

   return(
    

 <div>
    
    

     <Routes>
            <Route exact path="/" element={<Admin/>}></Route>
            <Route exact path="/Addproduct" element={<Addproduct/>}></Route> 
            <Route exact path="/Listproduct" element={<Listproduct/>}></Route> 
            <Route exact path="/Editproduct" element={<Editproduct/>}></Route> 
            <Route exact path="/Addcategore" element={<Addcategore/>}></Route> 
            <Route exact path="/Listcategore" element={<Listcategore/>}></Route> 
            <Route exact path="/Editcategore" element={<Editcategore/>}></Route>
            <Route exact path="/Addsub" element={<Addsub/>}></Route> 
            <Route exact path="/Orderlist" element={<Orderlist/>}></Route>
            <Route exact path="/Listsub" element={<Listsub/>}></Route>  
            <Route exact path="/Custmerlist" element={<Custmerlist/>}></Route>  
            <Route exact path="/Addcolor" element={<Addcolor/>}></Route>  
            <Route exact path="/Orderdetails" element={<Orderdetails/>}></Route> 
            <Route exact path="/Listcolor" element={<Listcolor/>}></Route>  
            <Route exact path="/Invoice" element={<Invoice/>}></Route>
         
            <Route exact path="/Addattribute" element={<Addattribute/>}></Route>  
            <Route exact path="/Attributvalue" element={<Attributvalue/>}></Route>
            <Route exact path="/Deletedproduct" element={<Deletedproduct/>}></Route>
            
</Routes>

 </div>

  
       
   );

}
export default Home;