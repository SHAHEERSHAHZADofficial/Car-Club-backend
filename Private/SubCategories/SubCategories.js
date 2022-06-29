import express from "express"
const SubCategoryRoutes= express.Router()
import SubCategories from "../../models/SubCategorySchema.js"


SubCategoryRoutes.post("/addSubCategories",async(request,respond,next)=>{

    // console.log(request.body)
    const subCategories = new SubCategories ({
        SubCategoryName:request.body.SubCategoryName,
        SubCategoryDescription:request.body.SubCategoryDescription,
        Category_Id:request.body.Category_Id
     })
         await subCategories.save()
         .then( result => {
            console.log("data is saved",result)
            respond.status(200).json({
            newSubCategory:result
            })
        }).catch((err) => {
            respond.status(500).json({
                error:err
            })
       })

})



SubCategoryRoutes.get("/getSubCategories",async(request,respond,next)=>{
    SubCategories.find()
    .then(result =>{
     respond.status(200).json({
        SubCarCategories:result
     })
    }).catch(err=>{
        console.log(err)
        respond.status(500).json({
            error:err
        })
    })
})





SubCategoryRoutes.get("/getById/:Category_Id", async (request, respond, next) => {
    let { Category_Id } = request.params;

    SubCategories.find({ Category_Id: Category_Id })
        .then(result => {
            respond.status(200).json({
                CarSubCategories: result
            })
        }).catch(err => {
            console.log(err)
            respond.status(500).json({
                error: err
            })
        })
})


export default SubCategoryRoutes