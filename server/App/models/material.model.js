let mongoose =require("mongoose")

let materialSchema=mongoose.Schema(
    {
        materialName:{
            type:String,
            minLength:2,
            maxLength:10,
            required:true,
            unique:["material Name Alredy Exist"],
        },
        materialOrder:Number,
        materialStatus:{
            type:Boolean,
            default:true
        }
    }
)

let materialModel=mongoose.model("material",materialSchema)

module.exports={materialModel}