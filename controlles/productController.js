const Product = require("../models/productModels")
const { response } = require("express")


exports.getProduct = async (request, response) => {
    try {
        const productList = await Product.find({ categoryID: request.params.categoryID })
        response.status(200).json({
            status: "Success",
            data: productList
        })

    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.createProduct = async (request, response) => {
    try {
        const { name, price, description, preparing, categoryID } = request.body
        if (!name || !price || !description || !preparing || !categoryID) {
            return response.status(400).json({
                status: "some thing missing",
                messages: error.messages
            })
        }

        const newProduct = await Product.create({
            name,
            price,
            description,
            preparing,
            categoryID
        })



        response.status(200).json({
            status: "create success",
            data: newProduct
        })

    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}