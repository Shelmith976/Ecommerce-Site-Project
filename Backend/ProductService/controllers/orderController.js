const poolPromise = require('../config/poolPromise')

module.exports={
    //Make order
    createOrder: async(req, res)=>{
        let {userId,productId} = req.body
        try{
        let pool = await poolPromise()
        pool
            .request()
            .INPUT("userId",userId)
            .INPUT("productId",productId)
            .execute(`addOrders`)
            res.json({
                success:true,
                status:200,
                message:"You made an order"
            })
        
        }
        catch (err) {
            console.log(err.message)
        }               
            
        }
}
