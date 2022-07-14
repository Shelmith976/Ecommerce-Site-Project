const poolPromise = require('../../config/poolPromise')


module.exports={
    //Create product
    createProduct: async(req, res)=>{
        let {productName,description,price,category,productImage} = req.body
        try{
            let pool = await poolPromise()
            pool
            .request()
            .INPUT("productName",productName)
            .INPUT("description",description)
            .INPUT("price",price)
            .INPUT("category",category)
            .INPUT("productImage",productImage)
            .execute(`addProducts`)
            res.json({
                success:true,
                status:200,
                message:"Product has been added"
            })
        }catch (err) {
            console.log(err.message)
        }       
    },
        //update products
    updateProduct: async(req, res)=>{
        let {productName,description,price,category,productImage} = req.body
        try{
            let pool = await poolPromise()
            pool
                .request()
                .INPUT("productName",productName)
                .INPUT("description",description)
                .INPUT("price",price)
                .INPUT("category",category)
                .INPUT("productImage",productImage)
                .execute(`updateProducts`)
                res.json({
                    success:true,
                    status:200,
                    message:"Product has been updated"
                    })
            }catch (err) {
                console.log(err.message)
            } 
        },  
            //Get all available products
        viewProducts: async(req,res)=>{
            let pool = await poolPromise()
            pool.query(`select product_name from Products`)
            .then(results=>{
                if(results.recordset){
                    return res.status(200).json({
                        status:200,
                        success: true,
                        message: "These are all the products",
                        results:results.recordset
                        })
                    }
                    res.status(404).json({
                        status:404,
                        success: false,
                        message: "There are no products to view",
                        results:{}
                    
                })
            })
        },
            //Search products by name
        getProduct: async(req, res)=>{
            const {product_name} = req.params
            let pool = await poolPromise()
            pool.query(`select * from Products where product_name='${product_name}'`)
            .then(results=>{
                let products=results.recordset[0]
                if(products){
                    return res.status(200).json({
                        status:200,
                        success: true,
                        message: "You found the product",
                        results:products 
                        })
                    }
                    res.status(404).json({
                        status:404,
                        success: false,
                        message: "No product with that name",
                        results:{}
                    })
                    
                    })
                }
        
}
