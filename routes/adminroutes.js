
const express = require('express');

const adminRouteurl = express.Router();


adminRouteurl.get('/add-product',(req,res,next)=>{
    //console.log('Second Middleware');
    res.send('<h1>Second Middleware</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="Submit"/></form>')
});

adminRouteurl.post('/store-product',(req,res,next)=>{
    console.log('data',req.body);
   res.send('<h1>Product Saved Successfully</h1>')
});

module.exports = adminRouteurl;