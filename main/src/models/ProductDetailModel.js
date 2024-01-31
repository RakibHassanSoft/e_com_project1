const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    img1: { type: String, trim: true ,required: true },
    img2: { type: String, trim: true  },
    img3: { type: String, trim: true  },
    img4: { type: String, trim: true  },
    des: { type: String,required: true  },
    color: { type: String,required: true  },
    size: { type: String,required: true  },
    size: { type: String,required: true  },
    productID:{ type: mongoose.Schema.ObjectId,required:true},   //it will come from prodct model
  

  },
  { timestamps: true, versionkey: false }
);

const ProductDetailsModel=mongoose.model("productDetails", DataSchema);

module.exports=ProductDetailsModel;
