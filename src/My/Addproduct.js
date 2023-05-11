import { Form, Button, Container } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Route, Link, Routes } from 'react-router-dom';
import { fetch } from 'whatwg-fetch';
import jquery from "jquery";
import $ from "jquery";
import Swal from "sweetalert2";



function Admin() {
    const navigate = useNavigate();
    const [products3, setProducts3] = useState([]);
    const [products, setProducts] = useState([]);
    const [products1, setProducts1] = useState([]);
    const [products2, setProducts2] = useState([]);
    const [products5, setProducts5] = useState([]);
    const [selects, setSelects] = useState();
    const [sub, setSub] = useState();
    const [arriv, setArriv] = useState();
    const [cate, setCate] = useState();
    const [categories, setCategories] = useState();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [sku, setSku] = useState('');
    const [sale, setSale] = useState('');
    const [percentage, setPercentage] = useState('');
    const [Inventery, setInventery] = useState('');
    const [id, setId] = useState('');
    const [attributes, setAttribut] = useState([]);
    const [color, setColor] = useState([]);
    const [show, setShow] = useState(false);
    const [image, setImage] = useState([])











    function handelDemo1(e) {
        setName(e.target.value);

    }
    function handelDemo4(e) {
        setSku(e.target.value);

    }
    function handelDemo5(e) {
        setPercentage(e.target.value);

    }
    function handelDemo6(e) {
        setSale(e.target.value);

    }
    function handelDemo7(e) {
        setDescription(e.target.value);

    }

    function handelDemo8(e) {
        setInventery(e.target.value);

    }
    function handelDemo12(e) {
        setSub(e.target.value);

    }
    function handelDemo13(e) {
        setCategories(e.target.value);

    }
    function handelDemo14(e) {
        setArriv(e.target.value);

    }

    function handelDemo15(e) {
        setColor(e.target.value);
        console.log(color)
    }

    function handelDemo2(e) {
        setPrice(e.target.value);
    }




    function Subs(e) {

        var data = { "categories": categories };

        console.log(data);
        axios.post("http://localhost:4200/jio", data).then(
            res => setProducts2(res.data)

        )

    };



    function Saveproduct(e) {
        JSON.stringify(attributes)
        console.log(attributes)
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('sku', sku);
        formData.append('sale', sale);
        formData.append('percentage', percentage);
        formData.append('description', description);
        formData.append('selects', selects);
        formData.append('categories', categories);
        formData.append('sub', sub);
        formData.append('arriv', arriv);
        formData.append('Inventery', Inventery);
        formData.append('color', color);
        formData.append('attributes', attributes);

        Array.from(image).forEach(item => {
            formData.append('filename', item)
            console.log(item)
        })


        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }


        axios.post("http://localhost:4200/Saveproduct", formData, config).then(
            res => console.log(res)

        )

        Swal.fire({
            icon: 'success',
            // title: 'Password Changed',
            text: "product added successfuly",
        })

    };

    async function showsh(e) {
        setShow(true)
        var attribut = e.target.value
    


        const data2 = { "attribut": attribut };
        console.log(data2)
        setAttribut([...attributes, JSON.stringify(attribut)])
        const config = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data2)
        }
        console.log(data2);
        const response = await fetch('http://localhost:4200/attriklj', config)

        const data3 = await response.json();
        setProducts3(data3)
        console.log(data3);


    }



    useEffect(() => {
        axios.get("http://localhost:4200/showcate").then(res => setProducts1(res.data));


    }, []);



    useEffect(() => {
        axios.get("http://localhost:4200/attrilist").then(res => setProducts(res.data));


    }, []);

    

    useEffect(() => {
        axios.get("http://localhost:4200/colores").then(res => setProducts5(res.data));


    }, []);


    






    return (


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
                                <a class="m-link" data-toggle="collapse" data-target="#Attributes" href="#">
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
                                            <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/profile_av.svg" alt="profile" />
                                        </a>
                                        <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                                            <div class="card border-0 w280">
                                                <div class="card-body pb-0">
                                                    <div class="d-flex py-1">
                                                        <img class="avatar rounded-circle" src="assets/images/profile_av.svg" alt="profile" />
                                                        <div class="flex-fill ms-3">
                                                            <p class="mb-0"><span class="font-weight-bold">Guri</span></p>
                                                            <small class="">Guri@gmail.com</small>
                                                        </div>
                                                    </div>

                                                    <div><hr class="dropdown-divider border-dark" /></div>
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
                                        <input type="search" class="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping" />
                                        <button type="button" class="input-group-text" id="addon-wrapping"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>

                            </div>
                        </nav>
                    </div>

                    {/* <!-- Body: Body --> */}
                    <div class="body d-flex py-3">
                        <div class="container-xxl">

                            <div class="row align-items-center">
                                <div class="border-0 mb-4">
                                    <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                        <h3 class="fw-bold mb-0">Products Add</h3>
                                        <button type="submit" class="btn btn-primary btn-set-task w-sm-100 py-2 px-5 text-uppercase" onClick={Saveproduct}>Submit</button>
                                    </div>
                                </div>
                            </div>

                            <div class="row g-3 mb-3">
                                <div class="col-xl-4 col-lg-4">
                                    <div class="sticky-lg-top">
                                        <div class="card mb-3">
                                            <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                                <h6 class="m-0 fw-bold">Pricing Info</h6>
                                            </div>
                                            <div class="card-body">
                                                <div class="row g-3 align-items-center">
                                                    <div class="col-md-12">
                                                        <label class="form-label">Product Price</label>
                                                        <input type="text" class="form-control" onChange={handelDemo2} />
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="form-label">Sale Price</label>
                                                        <input type="text" class="form-control" onChange={handelDemo6} />
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="form-label">Sale Percentage</label>
                                                        <input type="text" class="form-control" onChange={handelDemo5} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div class="card mb-3">
                                    <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                        <h6 class="m-0 fw-bold">Visibility Status</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="couponsstatus" checked/>
                                            <label class="form-check-label">
                                                Published
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="couponsstatus"/>
                                            <label class="form-check-label">
                                                Scheduled
                                            </label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" name="couponsstatus"/>
                                            <label class="form-check-label">
                                                Hidden
                                            </label>
                                        </div>
                                    </div>
                                </div> */}


                                        <div class="card mb-3">
                                            <div class="categories">
                                                <div class="filter-title">
                                                    <a class="title" data-toggle="collapse" href="#category" role="button" aria-expanded="true">Attributes</a>
                                                </div>
                                                <div class="collapse show" id="category" >

                                                    <div class="filter-category">
                                                        <ul class="category-list">
                                                        <select name="cate" className="form-control" >
                                                        <option >--Select Attribute --</option>


                                                        {products.map((prod, index) => (
                                                            <option key={index} value={prod.atnames}   onClick={showsh}>{prod.atnames}</option>

                                                        ))


                                                        }


                                                    </select>
                                                    {products3.map((item, index) => {
                                                            return (
                                                                <td key={index}>
                                                                    <td>

                                                                        <input type="checkbox" id="html" name="fav_language" value={item.atvalue} multiple onChange={(e) => {
                                                                            setAttribut([...attributes, e.target.value])
                                                                        }} />
                                                                        <label for="html" value={item.atvalue} multiple>{item.atvalue}</label>&nbsp;

                                                                    </td>



                                                                </td>
                                                            );
                                                        })}


                                                         
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card mb-3">
                                            <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                                <h6 class="m-0 fw-bold">Categories</h6>
                                            </div>
                                            <div class="card-body">
                                                <div class="row g-3 align-items-center">
                                                    <select name="cate" className="form-control" onChange={handelDemo13} onClick={Subs} >
                                                        <option >--Select Categories</option>


                                                        {products1.map((products, index) => (
                                                            <option key={index} value={products.categories}  >{products.categories}</option>

                                                        ))


                                                        }


                                                    </select>
                                                    <div class="col-md-12">
                                                        <div class="row g-3 align-items-center">
                                                            <select name="cate" className="form-control" onChange={handelDemo12}>
                                                                <option>--Select Sub Categories</option>
                                                                {
                                                                    products2.map((data, index) => (
                                                                        <option key={index} value={data.subcategories}>{data.subcategories}</option>


                                                                    ))
                                                                }




                                                            </select></div>


                                                    </div>
                                                    <div class="col-md-12">
                                                        <div class="row g-3 align-items-center">
                                                            <select name="cate" className="form-control" onChange={handelDemo14}>
                                                                <option >--Select type</option>
                                                                <option>Best seller</option>
                                                                <option>New Arrivals</option>
                                                                <option>Discount</option>




                                                            </select></div>


                                                    </div>
                                                </div>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                                <div class="col-xl-8 col-lg-8">
                                    <div class="card mb-3">
                                        <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                            <h6 class="mb-0 fw-bold ">Basic information</h6>
                                        </div>
                                        <div class="card-body">
                                            <form>
                                                <div class="row g-3 align-items-center">
                                                    <div class="col-md-6">
                                                        <label class="form-label">Product Name</label>
                                                        <input type="text" class="form-control" onChange={handelDemo1} />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="form-label">Product SKU</label>
                                                        <input type="text" class="form-control" onChange={handelDemo4} />
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="form-label">Inventery</label>
                                                        <input type="text" class="form-control" onChange={handelDemo8} />
                                                    </div>


                                                    <div class="col-md-12">
                                                        <label class="form-label">Product Description</label>
                                                        <div class="row">



                                                            <div >
                                                                <textarea type="text" class="form-control" id="Input" placeholder="Description" style={{ height: "250px" }} onChange={handelDemo7} />
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div class="card mb-3">
                                        <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                            <h6 class="mb-0 fw-bold ">Images</h6>

                                        </div>
                                        <div class="card-body">
                                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                                <Form.Control type="file" name="filename" placeholder="enter product price" accept="image/*" multiple onChange={(e) => { setImage(e.target.files) }} />
                                            </Form.Group>
                                        </div>
                                    </div>

                                    <div class="card mb-3">
                                        <div class="card-header py-3 d-flex justify-content-between align-items-center bg-transparent border-bottom-0">
                                            <h6 class="m-0 fw-bold">Color</h6>

                                        </div>
                                        <div class="card-body">
                                            <div class="form-check">
                                                <div class="multiselect">

                                                    <br />
                                                    <div
                                                        id="checkboxes"


                                                    >
                                                        {products5.map((item, index) => {
                                                            return (
                                                                <td key={index}>
                                                                    <td>

                                                                        <input type="checkbox" id="html" name="fav_language" value={item.color} multiple onChange={(e) => {
                                                                            setColor([...color, e.target.value])
                                                                        }} />
                                                                        <label for="html" value={item.color} multiple>{item.color}</label>&nbsp;

                                                                    </td>



                                                                </td>
                                                            );
                                                        })}

                                                    </div>
                                                    <br />
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <!-- Modal Custom Settings--> */}


                    {/* <!-- Modal Cropper--> */}
                    <div class="modal docs-cropped" id="getCroppedCanvasModal" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Cropped</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body"></div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-white border lift" data-bs-dismiss="modal">Close</button>
                                    <a class="btn btn-primary" id="download" href="javascript:void(0);" download="cropped.html">Download</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            <h1>hellow</h1>

        </div>

    );

}
export default Admin;