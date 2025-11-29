const { materialModel } = require("../../models/material.model")


let creatematerial=async (req,res)=>{
    // console.log(req.body);
    // let {cName,cCode,cOrder}=req.body

    // let inserObj={
    //     materialName:cName,
    //     materialCode:cCode,
    //     materialOrder:cOrder
    // }
    try{
        let material=await materialModel.insertOne(req.body)
        res.send(
            {
                _status:true,
                _message:"material Created",
                material
            }
        )
    }
    catch(err){
        let error
        if(err.code=="11000"){
            error="material name Alredy Exits"
        }

         res.send(
            {
                _status:false,
                _message:"Error Found",
                error,
              
            }
        )
    }
    
}

let viewmaterial= async(req,res)=>{
    let materialData=await materialModel.find()
    res.send(
        {
            _status:true,
            _message:"material Found",
            materialData
        }
    )
}
let deletematerial=async (req,res)=>{
    let {id}=req.params
     let material=await materialModel.deleteOne({_id:id})
    res.send(
        {
            _status:true,
            _message:"material Deleted",
            material
        }
    )
}

let updatematerial=async (req,res)=>{
    let {id}=req.params
    let updateRes=await materialModel.updateOne(
        { _id:id},
        {
            $set:req.body
        }
    )
    res.send(
        {
            _status:true,
            _message:"material Updated",
            updateRes
        }
    )
}

let multiDelete=async (req,res)=>{
     let {ids}=req.body //Array
     let material=await materialModel.deleteMany({_id:ids})
    res.send(
        {
            _status:true,
            _message:"material Deleted",
            material
        }
    )
}

module.exports={multiDelete,creatematerial,viewmaterial,deletematerial,updatematerial}