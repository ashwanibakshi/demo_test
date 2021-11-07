const mongoose      = require("mongoose");

const orderSchema   = new mongoose.Schema({
    order_ref_no:{
        type:String,
        required:true
    },
    clientid:{
        type:mongoose.Types.ObjectId,
        ref:"customers",
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    priority:{
        type:String,
        required:true
    },
    address:[],
    shipping:{
        method:{
            type:String,
            required:true
        },
        consignor:{
            type:String,
            required:true
        },
        invoice: {
          shipments: {
         type:Number,
         required:true  
        },
          currency:{
              type:String,
              required:true
          },
          total:{
              type:Number,
              required:true
          }
        }
    },
    items:[]
});

const customerSchema = new mongoose.Schema({
    company:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    street1:{
        type:String,
        required:true
    },
    street2:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    }

});

const orderImageSchema = new mongoose.Schema({
    type:{
            type:String,
            required:true
        },
    format:{
            type:String,
            required:true
        },
    url:{
            type:String,
            required:true
        },
    size:{
            type:Number,
            required:true
        }  
});

const orderProductSchema = new mongoose.Schema({
     count:{
         type:Number,
         required:true
     },
     title:{
         type:String,
         required:true
     },
    product:{
        type:String,
        required:true
    },
    desc:{
       type:String,
       required:true
    },
    pages:{
        type:Number,
        required:true
    },
    files: [orderImageSchema],
    options: [
        {
          option:{
           type:String,
           required:true
          },
          desc: {
              type:String,
              required:true
          },
          count:{
              type:Number,
              required:true
          },
          type:{
              type:String,
              required:true
          }
        }
      ]
});


const order     = mongoose.model("orders",orderSchema);
const customers = mongoose.model("customers",customerSchema);
const product   = mongoose.model("products",orderProductSchema);

module.exports={
    order,
    customers,
    product
}