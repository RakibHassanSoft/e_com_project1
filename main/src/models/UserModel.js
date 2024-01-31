const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    email: { type: String, trim: true ,lowercase:true,required: true,unique:true },
    otp: { type: String, trim: true ,required: true },
    

  },
  { timestamps: true, versionkey: false }
);

const UserModel=mongoose.model("users", DataSchema);

module.exports=UserModel;
