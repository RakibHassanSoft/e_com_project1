const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
   
    storID:{type:String,required:true},
    store_passwd:{type:String,required:true},
    currency:{type:String,required:true},
    success_url:{type:String,required:true},
    cancle_url:{type:String,required:true},
    fail_url:{type:String,required:true},
    apn_url:{type:String,required:true}, //current gala payment ar somoy
    init_url:{type:String,required:true},
  

  },
  { timestamps: true, versionkey: false }
);

const PaymentSettingModel=mongoose.model("paymentSettings", DataSchema);

module.exports=PaymentSettingModel;