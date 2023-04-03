const { HttpError } = require("../../helpers")
// const {Ingredient} = require('../../models/ingredientSchema')
// const { Recipe } = require("../../models/recipeSchema")

const invokeType = async ({type, query}) => {


    switch (type) {
        case "ingredients":
            // const normalizeQuery = query.trim().toLowerCase().split()
            // if (normalizeQuery[0]) {
            //     const ingredient = await Ingredient.findOne({title:normalizeQuery });
                

            // }  
        

            // const ingredient = await Ingredient.findOne({title: });
            // return ("ingredients")


            case "title":
            //     const normalizeQuery = query.trim().toLowerCase()
            // //     const RegExp = `/${normalizeQuery}/i`
            // //     // console.log(normalizeQuery.length)
            // //     // if(normalizeQuery.length === 1) {
            // //     //     const queryToCapitalize = 
            // //     // }
                
            // //    console.log(RegExp.toString())
            // const forSearch = `/${normalizeQuery}/`
            // console.log(forSearch)


            //    const result = await Recipe.find({title: { $regex: /beef/, $options: 'i' }})

            //     // const result = await Recipe.find({title: /beef/i})
            //     //{ $regex: /Ghost/, $options: 'i' }
            //     // console.log(result)
            //     //).exists({ title: /beef/i}
  
            // // exists({ name: /picard/i })
            // return (result)


        default:
            throw HttpError(400, "Invalid type case")
      }
}

module.exports =  invokeType;