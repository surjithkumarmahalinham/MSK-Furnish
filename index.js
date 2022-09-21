var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var session = require('express-session');

mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"ecomnode"
})
var app = express();

app.use(express.static('public'));
app.set('view engine','ejs');
app.listen(8000);

app.use(session({
    secret:"secret"
}))
app.use(bodyParser.urlencoded({extended:true}));
console.log('server is start at port http://localhost:8000');
app.get('/home',function(req,res){

    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"ecomnode"
    });
    con.query("select * from products",(err,result)=>{
        res.render("pages/index",{result:result});
    })

})

app.post('/add_to_cart',function(req,res){
    var id = req.body.id;
    var name = req.body.id;
    var price = req.body.price;
    var quantity = req.body.quantity;
    var sale_price = req.body.sale_price;
    var image = req.body.image;
    var product = {id:id,name:name,price:price,quanity:quantity,sale_pice:sale_price,image:image}
})
app.get('/shop_detail/{id}',function(req,res){
    con.query("select * from products where id=req.id",(err,result)=>{
        res.render("pages/shop_detail",{result:result});
    })
})

//static url's

app.get('/',function(req,res){
    var con = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"",
        database:"ecomnode"
    });
    con.query("select * from products",(err,result)=>{
        res.render("pages/index",{result:result});
    })
})

app.get('/about',function(req,res){
    res.render('pages/about');
})
app.get('/career',function(req,res){
    res.render('pages/career');
})
app.get('/faq',function(req,res){
    res.render('pages/faq');
})
app.get('/privacy_policy',function(req,res){
    res.render('pages/privacy_policy');
})
app.get('/service_detail',function(req,res){
    res.render('pages/service_detail');
})
app.get('/blog_detail',function(req,res){
    res.render('pages/blog_detail');
})
app.get('/shop',function(req,res){
    res.render('pages/shop');
})
app.get('/shop_detail',function(req,res){
    res.render('pages/shop_detail');
})
app.get('/cart',function(req,res){
    res.render('pages/cart');
})
app.get('/checkout',function(req,res){
    res.render('pages/checkout');
})
app.get('/contact',function(req,res){
    res.render('pages/contact');
})