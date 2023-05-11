import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import Header from './My/Header';
import Footer from './My/Footer';
import Sheader from './My/Sheader';

import './Admin.css';


function Admin()


{
  const [products3,setProducts3] =useState([]);
  function Show1(){
    setInterval(function () {
     var data = {"lon":888826,"lat":77721};
     console.log(data);
     
     axios.post("http://localhost:3303/location",data).then(
         res=> setProducts3(res.data)
    
      );
     
  
      

    },1000);
  }
   return(
    

 <div  >
  
  <button type="button" onClick={Show1}>login</button>

</div>    
       
   );

}
export default Admin;