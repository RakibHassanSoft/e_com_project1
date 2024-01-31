const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, trim: true, required: true },
    shortDes: { type: String, trim: true ,required: true },
    price: { type: String, trim: true,required: true  },
    discount: { type: Boolean, trim: true,default:false },
    discountPrice: { type: String, trim: true,required: false  },
    image: { type: String, trim: true,required: true  },
    star: { type: String, trim: true,required: true  },
    stock: { type: Boolean, trim: true,required: true ,default:true },
    remark: { type: String, trim: true,required: true ,enum:['new','trending','popular','top','special','reguar'] },//popular or new or tranding
    remark: { type: String, trim: true,required: true  },

  },
  { timestamps: true, versionkey: false }
);

const ProductModel=mongoose.model("products", DataSchema);

module.exports=ProductModel;
