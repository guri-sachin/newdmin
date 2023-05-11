import {Form,Button,Container} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";



function Admin()


{
  const [products3,setProducts3] =useState([]); 
  const [products,setProducts1] =useState([]);
  const [search, setSearch] = useState('');
  
  const [currentPage,setCurrentPage] = useState(1)
    const recordsPerPage = 2;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    
  
    
    const npage = Math.ceil(products3.length / recordsPerPage)
    const number = [...Array(npage + 1).keys()].slice(1)
    

    
    const records = products3.filter((item) => 
    item.fullname.toLowerCase().includes(search.toLowerCase())).slice(firstIndex, lastIndex);



  useEffect(()=>{
    axios.get("http://localhost:4200/userdatalist").then(res=>setProducts3(res.data));
    
    
},[]);


const handleSearch = (event) => {
    setSearch(event.target.value);
  };




function Shows(e){
  
  
    
      
    const id = e.target.id;
    axios.get(`http://localhost:4200/deletecustmer/${id}`).then(
      res => setProducts1(res.data));

   }

console.log(products3)

function perPage(){
    if(currentPage !== 1){
      setCurrentPage(currentPage - 1)
    }
  }
  
  
  function changeCPage(id){
  
      setCurrentPage(id)
    
  }
  
  
  function nextPage(){
    
    if(currentPage !== npage){
      setCurrentPage(currentPage + 1)
    }
  console.log(currentPage)
  }


   return(
    

 <div  >



    <div id="ebazar-layout" class="theme-blue">
        
        {/* <!-- sidebar --> */}
        <div class="sidebar px-4 py-4 py-md-4 me-0">
            <div class="d-flex flex-column h-100">
                <a href="index.html" class="mb-0 brand-icon">
                    <span class="logo-icon">
                        <i class="bi bi-bag-check-fill fs-4"></i>
                    </span>
                    <span class="logo-text">Pepperfry</span>
                </a>
                {/* <!-- Menu: main ul --> */}
                <ul class="menu-list flex-grow-1 mt-3">
                    <li><a class="m-link active" href="/"><i class="icofont-home fs-5"></i> <span>Dashboard</span></a></li>
                    <li class="collapsed">
                        <a class="m-link" data-toggle="collapse" data-target="#menu-product" href="#">
                            <i class="icofont-truck-loaded fs-5"></i> <span>Products</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                            {/* <!-- Menu: Sub menu ul --> */}
                            <ul class="sub-menu collapse" id="menu-product">
                               
                            <li><a class="ms-link" href="Addproduct">Product Add</a></li>
                               <li><a class="ms-link" href="Listproduct">Product List</a></li>
                                <li><a class="ms-link" href="Deletedproduct">Deleted Product</a></li>
                               
                               
                            </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link" data-toggle="collapse" data-target="#categories" href="#">
                            <i class="icofont-chart-flow fs-5"></i> <span>Categories</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                            {/* <!-- Menu: Sub menu ul --> */}
                            <ul class="sub-menu collapse" id="categories">
                            <li><a class="ms-link" href="Addcategore">Categories Add</a></li>
                             <li><a class="ms-link" href="Addsub">Add Sub Categories</a></li>
                             <li><a class="ms-link" href="Addattribute">Add Attribute</a></li>
                             <li><a class="ms-link" href="Listcategore">Categories List</a></li>
                             <li><a class="ms-link" href="Listsub">Sub Categories List</a></li>
                            </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link"  data-toggle="collapse" data-target="#Attributes" href="#">
                        <i class="icofont-notepad fs-5"></i> <span>Attributes</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul class="sub-menu collapse" id="Attributes">
                        <li><a class="ms-link" href="Addcolor">Add Color</a></li>
                            <li><a class="ms-link" href="Attributvalue">Attribute values</a></li>
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link"   href="Orderlist">
                        <i class="icofont-notepad fs-5" href="Orderlist"></i> <span href="Orderlist">Orders</span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                       
                    </li> 
                   
                    <li class="collapsed">
                        <a class="m-link"   href="Custmerlist">
                        <i class="icofont-funky-man fs-5" href="Custmerlist"></i> <span href="Orderlist">Customers List</span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                       
                    </li>
                    
                    
                    
                    
                    
                    
                    
                </ul>
                {/* <!-- Menu: menu collepce btn --> */}
                <button type="button" class="btn btn-link sidebar-mini-btn text-light">
                    <span class="ms-2"><i class="icofont-bubble-right"></i></span>
                </button>
            </div>
        </div>    

        {/* <!-- main body area --> */}
        <div class="main px-lg-4 px-md-4"> 

            {/* <!-- Body: Header --> */}
            <div class="header">
                <nav class="navbar py-4">
                    <div class="container-xxl">
        
                        {/* <!-- header rightbar icon --> */}
                        <div class="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                            
                            
                      
                            <div class="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center zindex-popover">
                                <div class="u-info me-2">
                                    <p class="mb-0 text-end line-height-sm "><span class="font-weight-bold">Guri</span></p>
                                    <small>Admin Profile</small>
                                </div>
                                <a class="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                                    <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/profile_av.svg" alt="profile"/>
                                </a>
                                <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                    <div class="card border-0 w280">
                                        <div class="card-body pb-0">
                                            <div class="d-flex py-1">
                                                <img class="avatar rounded-circle" src="assets/images/profile_av.svg" alt="profile"/>
                                                <div class="flex-fill ms-3">
                                                    <p class="mb-0"><span class="font-weight-bold">Guri</span></p>
                                                    <small class="">Guri@gmail.com</small>
                                                </div>
                                            </div>
                                            
                                            <div><hr class="dropdown-divider border-dark"/></div>
                                        </div>
                                        <div class="list-group m-2 ">
                                            <a href="admin-profile.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-ui-user fs-5 me-3"></i>Profile Page</a>
                                            <a href="order-invoices.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-file-text fs-5 me-3"></i>Order Invoices</a>
                                            <a href="ui-elements/auth-signin.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-logout fs-5 me-3"></i>Signout</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                         
                        </div>
        
                        {/* <!-- menu toggler --> */}
                        <button class="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                            <span class="fa fa-bars"></span>
                        </button>
        
                        {/* <!-- main menu Search--> */}
                        <div class="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                            <div class="input-group flex-nowrap input-group-lg">
                                <input type="search" class="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping" onChange={handleSearch}/>
                                <button type="button" class="input-group-text" id="addon-wrapping"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
        
                    </div>
                </nav>
            </div>

            {/* <!-- Body: Body --> */}
            <div class="body d-flex py-lg-3 py-md-2">
                <div class="container-xxl">
                    <div class="row align-items-center">
                        <div class="border-0 mb-4">
                            <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 class="fw-bold mb-0">Customers Information</h3>
                                
                            </div>
                        </div>
                    </div> 
                    <div class="row clearfix g-3">
                        <div class="col-sm-12">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <table id="myProjectTable" class="table table-hover align-middle mb-0" style={{width:"100%"}}>
                                        <thead>
                                            <tr>
                                                <th>Details</th>
                                                <th>Customers</th> 
                                                <th>Register  Date</th>
                                                <th>Mail</th>
                                                <th>Phone</th> 
                                                <th>Country</th> 
                                                <th>Total Order</th>
                                                <th>Actions</th>  
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {records.map((item,index)=>{
                 return(
                     <tr key={index}>
                                          
                                            
                                         
                   
                                            
                                                <td><strong>#P0{item.id}</strong></td>
                                                <td>
                                                        <a href="customer-detail.html">
                                                            <img class="avatar rounded" src="assets/images/xs/avatar1.svg" alt=""/>
                                                            <span class="fw-bold ms-1">{item.fullname}</span>
                                                        </a>
                                                </td>
                                                <td>
                                                {item.orderno}
                                                </td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.country}</td>
                                                <td>18</td>
                                                <td>
                                                    <div class="btn-group" role="group" aria-label="Basic outlined example">
                                                    
                                                        <button type="button" class="btn btn-outline-secondary deleterow" id={item.id} onClick={Shows}><i class="icofont-ui-delete text-danger" id={item.id} onClick={Shows}></i></button>
                                                    </div>
                                                </td>
                                          
                                            </tr>
                 );
             })}
                                            
                                         
                                         
                                       
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row g-3 mb-3">
                                <div class="col-md-12">
                                <nav aria-label="Page navigation example" class="ab144">
  <ul class="pagination">
    <li class="page-item ab38"><a class="page-link" onClick={perPage}>Previous</a></li>
    {number.map((n, i) =>(
    <li  className={`page-item ${currentPage === n ? 'active' :''}`} key={i}>
      <a onClick={()=> changeCPage(n)} className="page-link" href="#">
   {n}
 
  
    
    </a></li>    ))}

    <li class="page-item ab38"><a class="page-link"   onClick={nextPage}>Next</a></li>
  </ul>
</nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* <!-- Modal Custom Settings--> */}
            

            {/* <!-- Modal Cropper--> */}
       

        </div>      

    </div>




</div>    
       
   );

}
export default Admin;