const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
   
    userID:{type:mongoose.Schema.Types.ObjectId,required:true},
    productID:{type:mongoose.Schema.Types.ObjectId,required:true},
    des: { type: String, trim: true ,required: true },
    rating: { type: String, trim: true ,required: true },

  },
  { timestamps: true, versionkey: false }
);

const ReviewModel=mongoose.model("reviews", DataSchema);

module.exports=ReviewModel;