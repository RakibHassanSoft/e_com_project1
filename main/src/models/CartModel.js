const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
   
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    color: { type: String, trim: true ,required: true },
    size: { type: String, trim: true ,required: true },
    qty: { type: String, trim: true ,required: true },
    price: { type: String, trim: true ,required: true },

  },
  { timestamps: true, versionkey: false }
);

const CartModel=mongoose.model("carts", DataSchema);

module.exports=CartModel;