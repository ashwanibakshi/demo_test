const orderDB   = require("../db/orderDb");

module.exports.addOrder = (req,res)=>{
    orderDB.addOrder(req.body)
    .then((data)=>{
        res.json({data:data,msg:"success"});
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
}

module.exports.addProduct=(req,res)=>{
    orderDB.addProduct(req.body)
    .then((data)=>{
        res.json({data:data,msg:"success"})
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
}

module.exports.addCustomerDetail=(req,res)=>{
    orderDB.addCustomerDetails(req.body)
    .then((data)=>{
         res.json({data:data,msg:"success"});
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
}

module.exports.showAllCustomers=(req,res)=>{
    let perpage=5,page=1;
    if(req.query.perpage!=null && req.query.perpage!=undefined){
      perpage = req.query.perpage;
    }
    if(req.query.page!=null && req.query.page!=undefined){
      page = req.query.page;
    }
    orderDB.showallcustomers(perpage,page)
    .then((data)=>{
        res.json({data:data.data,current:data.current,pages:data.pages})
    })
    .catch((err)=>{
        res.json({error:err.message});
    })
}