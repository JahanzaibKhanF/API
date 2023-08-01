const product= require('../models/product')
const getAllPorducts = async (req,res)=>{
    const {company,name,sort,select} = req.query;
    const queryObject = {}
    if (company){
        queryObject.company = company
    }
    
     if (name){
        queryObject.name = {$regex:name, $options:"i"}
    }
    let apiData = product.find(queryObject);
    if (sort) {
       let sortFixed = sort.split(",").join(" ")
       apiData.sort(sortFixed)
    }
    if(select){
        let selectFixed = select.split(",").join(" ")
       apiData.select(selectFixed)
    }
    let page = Number(req.query.page) || 1;
   let limit = Number(req.query.limit) || 5;
   let skip = Number(page - 1)*limit;
   apiData.skip(skip).limit(limit)
   const myData= await apiData
     res.status(200).json({myData})
    
}

const getAllPorductsTesting = async (req,res)=>{
    const myData = await product.find(req.query);
    res.status(200).json({myData})
}
module.exports ={getAllPorducts,getAllPorductsTesting}