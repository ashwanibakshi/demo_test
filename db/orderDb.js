const customerModel   = require("../models/orderModel").customers;
const productModel    = require("../models/orderModel").product;
const orderModel      = require("../models/orderModel").order


module.exports.addOrder = (data)=>{
    return new Promise((resolve,reject)=>{
        try {
        let orderData = new orderModel({
             order_ref_no : data.order_ref_no,
                 clientid : data.clientid,
                    date  : Date.now(),
                 priority : data.priority,
                 address  : data.address,
                 shipping : data.shipping,
                 items    : data.items  
         });    
         orderData.save((err,odata)=>{
             if(err){
                reject(err);
             }
             else if(odata){
                 resolve(odata); 
             }
             else{
                 reject({message:"order not added"});
             }
         });
        } catch (error) {
            reject(errorr);
        }
    })
}

module.exports.addCustomerDetails=(data)=>{
    return new Promise((resolve,reject)=>{
         try {
           let cData = new customerModel ({
          company : data.company,
           name   : data.name,
         street1  : data.street1,
         street2  : data.street2,
         zip      : data.zip,
         city     : data.city,
         country  : data.country,
         state    : data.state,
         email    : data.email,
         phone    : data.phone
           });
           cData.save((err,sdata)=>{
                if(err){
                    reject(err);
                }
                else if(sdata){
                    resolve(sdata); 
                }
                else{
                    reject({message:"no data found"});
                }
           });
         } catch (error) {
             reject(error);
         }
    });
}

module.exports.addProduct=(data)=>{
    return new Promise((resolve,reject)=>{
         try {
              let pdata = new productModel({
                  count : data.count,
                  title : data.title,
                product : data.product,
                  desc  : data.desc,
                  pages : data.pages,
                  files : data.files,
                 options: data.options   
              }); 
             
              pdata.save((err,sdata)=>{
                   if(err){
                       reject(err);
                   }
                   else if(sdata){
                       resolve(sdata);
                   }
                   else{
                       reject({message:"no data added"})
                   }
              });
         } catch (error) {
             reject(error);
         }
    });
}

module.exports.showallcustomers=(perpage,page)=>{
   return new Promise((resolve,reject)=>{
       try {
           var query   = {};
           query.skip  = (perpage*page)-perpage;
           query.limit = perpage;
          customerModel.find({},{},query,(err,sdata)=>{
              if(err){
                  reject(err);
              }
              else{
           customerModel.find().count((err,count)=>{
                     if(err){
                         reject(err)
                     }
                     else{
                        let dataa = {
                            data:sdata,
                            current:page,
                            pages : Math.ceil(count/perpage)
                        }
                        resolve(dataa);
                     }
                 }); 
              }
          });         
       } catch (error) {
           reject(error);
       }  
   });
}