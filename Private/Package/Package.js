import express from "express"
const PackageRoutes= express.Router()
import  Package from "../../models/PackageSchema.js"


PackageRoutes.post("/addPackage",async(request,respond,next)=>{

    // console.log(request.body)
    const PackageObj = new Package ({
        PackageName:request.body.PackageName,
        PackageDescription:request.body.PackageDescription,
        PackagePrice:request.body.PackagePrice,
        SubCategory_Id:request.body.SubCategory_Id
     })
         await PackageObj.save()
         .then( result => {
            console.log("data is saved",result)
            respond.status(200).json({
            newPackage:result
            })
        }).catch((err) => {
            respond.status(500).json({
                error:err
            })
       })

})




PackageRoutes.get("/getPackage",async(request,respond,next)=>{
    Package.find()
    .then(result =>{
     respond.status(200).json({
        PackageData:result
     })
    }).catch(err=>{
        console.log(err)
        respond.status(500).json({
            error:err
        })
    })
})






PackageRoutes.get("/getById/:SubCategory_Id", async (request, respond, next) => {
    let { SubCategory_Id } = request.params;

    Package.find({ SubCategory_Id: SubCategory_Id })
        .then(result => {
            respond.status(200).json({
                Packages: result
            })
        }).catch(err => {
            console.log(err)
            respond.status(500).json({
                error: err
            })
        })
})




export default PackageRoutes