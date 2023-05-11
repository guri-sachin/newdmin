import {Form,Button,Container} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes,useLocation} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";



function Admin()


{
  const [productsh,setProductsh] =useState([]);
  const [name,setName] =useState('');

  const location = useLocation();
  const [products, setProducts] = useState([]);





  useEffect(() => {
    
  setName(location.state[0].orderno)


    var data = {"fullname":name}
    console.log(data)
    axios.post("http://localhost:4200/Addressad",data).then(
      res=>  setProducts(res.data))
     
  }, [products]);
  
 console.log(products)
  useEffect(() => {
    

    var data = {"fullname":name}
      console.log(data)
      axios.post("http://localhost:4200/Billadmin",data).then(
        res=>  setProductsh(res.data))

    }, []);




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
                            
                            
                            
                            {/* <div class="dropdown notifications">
                                <a class="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                                    <i class="icofont-alarm fs-5"></i>
                                    <span class="pulse-ring"></span>
                                </a>
                                <div id="NotificationsDiv" class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0 mt-3">
                                    <div class="card border-0 w380">
                                        <div class="card-header border-0 p-3">
                                            <h5 class="mb-0 font-weight-light d-flex justify-content-between">
                                                <span>Notifications</span>
                                                <span class="badge text-white">06</span>
                                            </h5>
                                        </div>
                                        <div class="tab-content card-body">
                                            <div class="tab-pane fade show active">
                                                <ul class="list-unstyled list mb-0">
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar1.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Chloe Walkerr</span> <small>2MIN</small></p>
                                                                <span class="">Added New Product 2021-07-15 <span class="badge bg-success">Add</span></span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <div class="avatar rounded-circle no-thumbnail">AH</div>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Alan	Hill</span> <small>13MIN</small></p>
                                                                <span class="">Invoice generator </span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar3.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Melanie	Oliver</span> <small>1HR</small></p>
                                                                <span class="">Orader  Return RT-00004</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar5.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Boris Hart</span> <small>13MIN</small></p>
                                                                <span class="">Product Order to Toyseller</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2 mb-1 border-bottom">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar6.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Alan	Lambert</span> <small>1HR</small></p>
                                                                <span class="">Leave Apply</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                    <li class="py-2">
                                                        <a href="javascript:void(0);" class="d-flex">
                                                            <img class="avatar rounded-circle" src="assets/images/xs/avatar7.svg" alt=""/>
                                                            <div class="flex-fill ms-2">
                                                                <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Zoe Wright</span> <small class="">1DAY</small></p>
                                                                <span class="">Product Stoke Entry Updated</span>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a class="card-footer text-center border-top-0" href="#"> View all notifications</a>
                                    </div>
                                </div>
                            </div> */}
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
                                <input type="search" class="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping"/>
                                <button type="button" class="input-group-text" id="addon-wrapping"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
        
                    </div>
                </nav>
            </div>

            {/* <!-- Body: Body --> */}
     
            <div class="body d-flex py-3">  
                <div class="container-xxl"> 
                 
                    <div class="row g-3 mb-3 row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-2 row-cols-xl-4">
                        <div class="col">
                            <div class="alert-success alert mb-0">
                                <div class="d-flex align-items-center">
                                    <div class="avatar rounded no-thumbnail bg-success text-light"><i class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></div>
                                    <div class="flex-fill ms-3 text-truncate">

                                        <div class="h6 mb-0">Order Created at</div>
                                        <span class="small">{name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="alert-danger alert mb-0">
                                <div class="d-flex align-items-center">
                                    <div class="avatar rounded no-thumbnail bg-danger text-light"><i class="fa fa-user fa-lg" aria-hidden="true"></i></div>
                                    <div class="flex-fill ms-3 text-truncate">
                                        <div class="h6 mb-0">Name</div>
                                        <span class="small">{location.state[0].usname}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="alert-warning alert mb-0">
                                <div class="d-flex align-items-center">
                                    <div class="avatar rounded no-thumbnail bg-warning text-light"><i class="fa fa-envelope fa-lg" aria-hidden="true"></i></div>
                                    <div class="flex-fill ms-3 text-truncate">
                                        <div class="h6 mb-0">Email</div>
                                        {products.map((item,index)=>{
                 return(
                    <div key={index}>
                                        <span class="small">{item.email}</span>
                                        </div>

);
})}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="alert-info alert mb-0">
                                <div class="d-flex align-items-center">
                                    <div class="avatar rounded no-thumbnail bg-info text-light"><i class="fa fa-phone-square fa-lg" aria-hidden="true"></i></div>
                                    <div class="flex-fill ms-3 text-truncate">
                                        <div class="h6 mb-0">Contact No</div>
                                        {products.map((item,index)=>{
                 return(
                    <div key={index}>
                                        <span class="small">{item.phone}</span>
                                        </div>

);
})}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div class="row g-3 mb-3 row-cols-1 row-cols-md-1 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3 row-deck"> 
                        <div class="col">
                            <div class="card auth-detailblock">
                                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 class="mb-0 fw-bold ">Delivery Address</h6>
                                    <a href="#" class="text-muted">Edit</a>
                                </div>
                                {products.map((item,index)=>{
                 return(
                    <tr key={index}>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Block Number:</label>
                                            <span><strong>{item.lname}</strong></span>
                                        </div>
                             

                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Address:</label>
                                            <span><strong>{item.line}</strong></span>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Pincode:</label>
                                            <span><strong>{item.zip}</strong></span>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Phone:</label>
                                            <span><strong>{item.phone}</strong></span>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">City:</label>
                                            <span><strong>{item.city}</strong></span>
                                        </div>
                                    </div>
                                </div>
                                       </tr>

                                       );
                                   })}
                            </div>
                        </div>

                        <div class="col">
                            <div class="card auth-detailblock">
                                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 class="mb-0 fw-bold ">Billing Address</h6>
                                    <a href="#" class="text-muted">Edit</a>
                                </div>
                                
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Block Number:</label>
                                            <span><strong>{productsh.lname}</strong></span>
                                        </div>
                             

                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Address:</label>
                                            <span><strong>{productsh.line}</strong></span>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Pincode:</label>
                                            <span><strong>{productsh.zip}</strong></span>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Phone:</label>
                                            <span><strong>{productsh.phone}</strong></span>
                                        </div>
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">City:</label>
                                            <span><strong>{productsh.city}</strong></span>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                        </div>
          
                        <div class="col">
                            <div class="card">
                                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 class="mb-0 fw-bold ">Invoice Deatil</h6>
                                    <a href="#" class="text-muted">Download</a>
                                </div>
                                <div class="card-body">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <label class="form-label col-6 col-sm-5">Number:</label>
                                            <span><strong>#78414</strong></span>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                          
                    </div> 
                    <div class="row g-3 mb-3">
                        <div class="col-xl-12 col-xxl-8">
                            <div class="card">
                                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 class="mb-0 fw-bold ">Order Summary</h6>
                                </div>
                                <div class="card-body">
                                    <div class="product-cart">
                                        <div class="checkout-table table-responsive">
                                            <table id="myCartTable" class="table display dataTable table-hover align-middle" style={{width:"100%"}}>
                                                <thead>
                                                    <tr>
                                                        <th class="product">Product Image</th>
                                                        <th>Product Name</th>
                                                        <th class="quantity">Quantity</th>
                                                        <th class="price">Price</th>
                                                    </tr>
                                                </thead>
                             
                                                <tbody>
                                                {location.state.map((item,index)=>{
                 return(
                    <tr key={index}>
                                                    
                                                        <td>
                                                        {JSON.parse(item.image_name.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> <img src={(item.split(","))}  />
                    </td>
       </tr>
              );
          })}
                                                        </td>
                                                        <td>
                                                        {JSON.parse(item.name.split(",")).map((item,index)=>{
 return(
     <tr key={index}>

     
         <td> {(item.split(","))} 
       </td>
      
</tr>
 );
})}
                                                        </td>
                                                        <td>
                                                        {JSON.parse(item.qty.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> {(item.split(","))} 
                    </td>
                   
       </tr>
              );
          })}
                                                        </td>
                                                        <td>
                                                        {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> {(item.split(","))} 
                    </td>
                   
       </tr>
              );
          })}
                                                        </td>
                                                    
                                                 
                                                        </tr>

);
})}
                                                 
                                                </tbody>
                          
                                            </table>
                                        </div>
                                        {location.state.map((item,index)=>{
                 return(
                    <div key={index}>
                                        <div class="checkout-coupon-total checkout-coupon-total-2 d-flex flex-wrap justify-content-end">
                                            <div class="checkout-total">
                                                <div class="single-total">
                                                    <p class="value">Subotal Price:</p>
                                                    <p class="price">                         {JSON.parse(item.price.split(",")).map((item,index)=>{
              return(
                  <tr key={index}>

                  
                      <td> {(item.split(","))} 
                    </td>
                   
       </tr>
              );
          })}</p>
                                                </div>
                                                <div class="single-total">
                                                    <p class="value">Shipping Cost (+):</p>
                                                    <p class="price"></p>
                                                </div>
                                                <div class="single-total">
                                                    <p class="value">Discount (-):</p>
                                                    <p class="price">{item.discount}</p>
                                                </div>
                                                <div class="single-total">
                                                    <p class="value">Tax(18%):</p>
                                                    <p class="price"></p>
                                                </div>
                                                <div class="single-total total-payable">
                                                    <p class="value">Total Payable:</p>
                                                    <p class="price">{item.total}</p>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
 );
})}
    
                                    </div>     
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



<h1>hellow</h1>

</div>    
       
   );

}
export default Admin;