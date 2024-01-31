const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    title: { type: String, trim: true ,required: true },
    des: { type: String, trim: true ,required: true },
    price: { type: String, trim: true ,required: true },
    image: { type: String, trim: true ,required: true },
    productID:{ type: mongoose.Schema.ObjectId,required:true},   //it will come from prodct model
  

  },
  { timestamps: true, versionkey: false }
);

const ProductSliderModel=mongoose.model("productSliders", DataSchema);

module.exports=ProductSliderModel;
