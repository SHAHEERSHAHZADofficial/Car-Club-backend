import express from "express"
const CategoryRoutes = express.Router()
import Categories from "../../models/CategorySchema.js"


CategoryRoutes.post("/addCategories", async (request, respond, next) => {

    const categories = new Categories({
        CategoryName: request.body.CategoryName,
        CategoryDescription: request.body.CategoryDescription
    })
    await categories.save()
        .then(result => {
            console.log("data is saved")
            respond.status(200).json({
                newCategory: result
            })
        }).catch((err) => {
            respond.status(500).json({
                error: err
            })
        })

})



CategoryRoutes.get("/getCategories", async (request, respond, next) => {
    Categories.find()
        .then(result => {
            respond.status(200).json({
                CarCategories: result
            })
        }).catch(err => {
            console.log(err)
            respond.status(500).json({
                error: err
            })
        })
})


CategoryRoutes.get("/getById/:id", async (request, respond, next) => {
    let { id } = request.params;

    Categories.findById({ _id: id })
        .then(result => {
            respond.status(200).json({
                CarCategories: result
            })
        }).catch(err => {
            console.log(err)
            respond.status(500).json({
                error: err
            })
        })
})


export default CategoryRoutes