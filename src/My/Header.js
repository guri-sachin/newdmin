import {Form,Button,Container} from 'react-bootstrap';
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";



function Admin()


{
  const [products3,setProducts3] =useState([]);
  



   return(
    

 <div  >
    {/* <!doctype html> */}

   


    <div id="ebazar-layout" class="theme-blue">
        
        {/* <!-- sidebar --> */}
        <div class="sidebar px-4 py-4 py-md-4 me-0">
            <div class="d-flex flex-column h-100">
                <a href="index.html" class="mb-0 brand-icon">
                    <span class="logo-icon">
                        <i class="bi bi-bag-check-fill fs-4"></i>
                    </span>
                    <span class="logo-text">eBazar</span>
                </a>
                {/* <!-- Menu: main ul --> */}
                <ul class="menu-list flex-grow-1 mt-3">
                    <li><a class="m-link active" href="index.html"><i class="icofont-home fs-5"></i> <span>Dashboard</span></a></li>
                    
                    <li class="collapsed">
                        <a class="m-link"  data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i class="icofont-truck-loaded fs-5"></i> <span>Products</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                            {/* <!-- Menu: Sub menu ul --> */}
                            <ul class="sub-menu collapse" id="collapseTwo">
                               
                            <li><a class="ms-link" href="Addproduct">Product Add</a></li>
                               <li><a class="ms-link" href="Listproduct">Product List</a></li>
                                <li><a class="ms-link" href="product-edit.html">Deleted Product</a></li>
                               
                               
                            </ul>
                    </li>

       
          

                    <li class="collapsed">
                        <a class="m-link"  data-toggle="collapse" data-target="#categories" href="#" toggle="dropdown" >
                            <i class="icofont-chart-flow fs-5"></i> <span>Categories</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                            {/* <!-- Menu: Sub menu ul --> */}
                            <ul class="sub-menu collapse" id="categories">
                                <li><a class="ms-link" href="categorie-list.html">Categories List</a></li>
                                <li><a class="ms-link" href="categories-edit.html">Categories Edit</a></li>
                                <li><a class="ms-link" href="categories-add.html">Categories Add</a></li>
                            </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link"  data-toggle="collapse" data-target="#menu-order" href="#">
                        <i class="icofont-notepad fs-5"></i> <span>Orders</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul class="sub-menu collapse" id="menu-order">
                            <li><a class="ms-link" href="order-list.html">Orders List</a></li>
                            <li><a class="ms-link" href="order-details.html">Order Details</a></li>
                            <li><a class="ms-link" href="order-invoices.html">Order Invoices</a></li>
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link"  data-toggle="collapse" data-target="#customers-info" href="#">
                        <i class="icofont-funky-man fs-5"></i> <span>Customers</span> <span class="arrow icofont-rounded-down ms-auto text-end fs-5"></span></a>
                        {/* <!-- Menu: Sub menu ul --> */}
                        <ul class="sub-menu collapse" id="customers-info">
                            <li><a class="ms-link" href="customers.html">Customers List</a></li>
                            <li><a class="ms-link" href="customer-detail.html">Customers Details</a></li>
                        </ul>
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
                                <input type="search" class="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping"/>
                                <button type="button" class="input-group-text" id="addon-wrapping"><i class="fa fa-search"></i></button>
                            </div>
                        </div>
        
                    </div>
                </nav>
            </div>

            {/* <!-- Body: Body --> */}
            
        {/* <!-- Modal Custom Settings--> */}
             
            
        </div>
    
    </div>




<h1>hellow</h1>

</div>    
       
   );

}
export default Admin;