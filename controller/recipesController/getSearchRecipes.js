// написати JOI схему для search


const { invalid } = require('joi');
const { HttpError } = require('../../helpers');
const {Recipe} = require('../../models/recipeSchema');
const invokeType = require('../../service/searchService/searchByType');

const getSearchRecipes = async (req,res) => {
    // const {_id: owner} = req.user;

    const {page = 1, limit = 12} = req.query;
    console.log(req.query)
    const {type, query} = req.body;
    const skip = (page - 1) * limit;

    if( query.lenght === 0) {
        throw HttpError(400, "invalid request")
    }
 const result = await invokeType(req.body)
    
    
    // const result = await Recipe.find({}, "-createdAt -updatedAt", {skip, limit});
    res.json();



}



module.exports = getSearchRecipes
