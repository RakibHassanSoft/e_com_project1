const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    CategoryName: { type: String, trim: true, required: true,unique:true },
    CategoryImg: { type: String, trim: true },
  },
  { timestamps: true, versionkey: false }
);

const CategoryModel=mongoose.model("categories", DataSchema);

module.exports=CategoryModel;
