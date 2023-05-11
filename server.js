     const express =require("express");
const path =require("path");
const app = express();
const mysql = require('mysql');
const bodyParser =require('body-parser');
const cors=require("cors");
const multer=require('multer');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, '/public')));



//create connection
const conn =mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'papper'
});



//connect to database
conn.connect((err) =>{
    if(err) throw err;
    console.log ('Mysql Connected...');
});

//multer


var imagename='';


const storage = multer.diskStorage({
 destination:'./public/images',
 filename:(req,files,cb)=>{
  return cb(null,`${files.fieldname}_${Date.now()}${path.extname(files.originalname)}`)
 }
  })
const upload = multer ({storage: storage});






//route for enquery 
app.post('/location',(req,res) =>{


    let sql ="UPDATE location SET lon='"+req.body.lon+"',lat='"+req.body.lat+"' WHERE id='"+req.body.id+"'";
  let data ="lon='"+req.body.lon+"',lat='"+req.body.lat+"'";
    let query =conn.query (sql,(err,results)=>{
           if(err)throw err;
           res.json({data});
         console.log(results);
    });

});

//route for insert data 
app.post('/ca',(req, res) => {
    let data = {categories: req.body.categories};
    console.log(data);
    let sql = "INSERT INTO catego SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for insert color 
app.post('/caores',(req, res) => {
    let data = {color: req.body.color};
    console.log(data);
    let sql = "INSERT INTO color SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for insert sub
app.post('/done',(req, res) => {
    let data = {categories: req.body.categories,subcategories:req.body.subcategories};
    console.log(data);
    let sql = "INSERT INTO sub SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});


//route for Add categories
app.use("/filename",express.static("./public/images"))
app.post('/Saveproduct',upload.array('filename',10),(req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({reqFiles})



    let data = {name: req.body.name, price: req.body.price,sale: req.body.sale,sku: req.body.sku,percentage: req.body.percentage, description: req.body.description,categories : req.body.categories,subcategories : req.body.sub,arriv:req.body.arriv,Inventery:req.body.Inventery,
        color: req.body.color, attribut: req.body.attributes,image_name:`${reqFiles}`};
    console.log(data);
    let sql = "INSERT INTO products SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for product update
app.post('/updat',(req,res)=>{
    let sql ="UPDATE products SET name ='"+req.body.name +"',price ='"+req.body.price +"',sku='"+req.body.sku+"',sale='"+req.body.sale+"',percentage='"+req.body.percentage+"',categories='"+req.body.categories+"',subcategories='"+req.body.sub+"',color='"+req.body.color+"',arriv='"+req.body.arriv+"',Inventery='"+req.body.Inventery+"'  WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results);
    });


});

//route for list products on the bases of color
app.post('/prcolor',(req,res) =>{
    
    let sql ="select * from products where color='"+req.body.color+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



//route for list colors
app.get('/colores',(req,res) =>{
    let sql ="SELECT * FROM  color;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list categories
app.get('/showcate',(req,res) =>{
    let sql ="SELECT * FROM  catego;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for list sub and categories
app.get('/showsub',(req,res) =>{
    let sql ="SELECT * FROM  sub;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list products
app.get('/showproduct',(req,res) =>{
    let sql ="SELECT * FROM products ";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for dropdown
app.get('/cate',(req,res) =>{
    let sql ="select id,sofa from second";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list dropdown
app.post('/jio',(req,res) =>{
    
    let sql ="select * from sub where categories='"+req.body.categories+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



//route for list dropdown
app.get('/chair',(req,res) =>{
    let sql ="select id,chair from second";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



//route for list users
app.get('/users',(req,res) =>{
    let sql ="SELECT * FROM register ";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for list users
app.get('/showimage',(req,res) =>{
    let sql ="SELECT * FROM shop ";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});


//route for delete users
app.get('/deleteuser/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM register WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});
//route for delete product
app.get('/productdelete/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM products WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for delete categoris
app.get('/deletecate/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM catego WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});

//route for delete sub
app.get('/deletesub/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM sub WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});



//route for product edit
app.get('/productedit/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM product WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//route for product update
app.post('/update',(req,res)=>{
    let sql ="UPDATE product SET name='"+req.body.name+"',price='"+req.body.price+"' WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.redirect('/showproduct');
    });


});

//route for Add categories
app.use("/filename",express.static("./public/images"))
app.post('/Savecate',upload.array('filename',1),(req, res) => {


    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/filename/' + req.files[i].filename)
    }

    console.log({reqFiles})



    let data = {categories: req.body.categories,image:`${reqFiles}`};
    console.log(data);
    let sql = "INSERT INTO shop SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});


//route for add to cart
app.get('/addcard/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="insert into card values('raman',"+id+",1)";
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/showproduct');
        });
});



//route for login page
app.post('/userlog',(req, res)=>{

    let sql = "select * from login where email='"+req.body.email+"' and password='"+req.body.password+"'" ;
    console.log(sql);
    let query = conn.query(sql,(err, results) => {
        if(results.length == 0){
            res.status(500).json({ success: false});
        }else{
            res.status(200).json({ success: true });
        }
        });
});



//route for list orders
app.get('/ordershw',(req,res) =>{
    let sql ="SELECT * FROM  acc;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for update status disable
app.post('/pro/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status recived
app.post('/pen/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status disable
app.post('/proi/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});

//route for update status recived
app.post('/peni/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    let data =req.body.setMessage;
    console.log(data);
    let sql ="UPDATE acc SET status= ? WHERE id="+id;
    let query =conn.query(sql, data,(err,results)=>{
        if (err) throw err;
        
        });
});


//route for insert Copupans
app.post('/coupns',(req, res) => {
    let data = {code: req.body.code,discount:req.body.discount,minprice:req.body.amount};
    console.log(data);
    let sql = "INSERT INTO coupns SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for products edit
app.get('/edi/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="SELECT * FROM products WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});

//new admin apis

//route for admin data of orders 
//route for product update decrease value
app.post('/admindata',(req,res)=>{
    let sql ="select *from acc WHERE id="+req.body.id;
    console.log(sql);
    let query = conn.query(sql,(err,results)=>{
        if(err) throw err;
        res.json(results)
    });
});


//route for address admin
app.post('/Addressad',(req,res) =>{
    
    let sql ="select * from address where orderno='"+req.body.fullname+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for bill admin
app.post('/Billadmin',(req,res) =>{
    
    let sql ="select * from bill where orderno='"+req.body.fullname+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



//route for insert attributes admin
app.post('/addatributs',(req, res) => {
    let data = {atnames: req.body.atnames};
    console.log(data);
    let sql = "INSERT INTO Attribute SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});


//route for list attributes admin
app.get('/attrilist',(req,res) =>{
    let sql ="SELECT * FROM  Attribute;;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for insert attribute values
app.post('/attriadded',(req, res) => {
    let data = {attribut: req.body.categories,atvalue:req.body.subcategories};
    console.log(data);
    let sql = "INSERT INTO Attrivalues SET ?";
    let query = conn.query(sql, data,(err, results) => {
        if(err)throw err;
        res.json(results);
        });
});

//route for get attributes values admin
app.post('/attriklj',(req,res) =>{
    
    let sql ="select * from Attrivalues where attribut='"+req.body.attribut+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//user list
app.get('/userdatalist',(req,res) =>{
    
    let sql ="select * from register inner join address on address.fullname = register.fullname";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});
 
//route for delete attributes
app.get('/deleteattri/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM attribute WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});

//route for delete attributes
app.get('/deletecolor/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM color WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.redirect('/Products');
        });
});

//route for delete acc custmer
app.get('/deletecustmer/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM register WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


//route for get attributes values admin
app.post('/usnamep',(req,res) =>{
    
    let sql ="select * from acc where usname='"+req.body.usname+"'";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});

//route for insert deleted products 
app.get('/delproduct/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into delpro select * from products where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for undo deleted products 
app.get('/deldeleted/:id',function(req,res){
    const id=req.params.id;
  
    console.log(id); 
    let sql = "insert into products select id,name,price,sku,sale,percentage,categories,subcategories,image_name,arriv,inventery,description,color,attribut from delpro where id="+id;
    
    let query =conn.query (sql,(err,results)=>{
        if (err) throw err;
        res.send(results)
      
        });
  
});

//route for delete product
app.get('/undodel/:id',function(req,res){
    const id=req.params.id;
    console.log(id);
    
    let sql ="DELETE FROM delpro WHERE id="+id;
    let query =conn.query(sql, (err,results)=>{
        if (err) throw err;
        res.json(results);
        });
});


//route for list deleted products admin
app.get('/listdeleted',(req,res) =>{
    let sql ="SELECT * FROM  delpro;;";
    let query =conn.query (sql,(err,results)=>{
        console.log(results)

           if(err)throw err;
           res.json(results);
    });
});



app.listen(4200,()=>{
    console.log(`express server running on 4200`);
});