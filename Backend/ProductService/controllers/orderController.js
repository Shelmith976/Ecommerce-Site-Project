const poolPromise = require('../config/poolPromise')

module.exports={
    //Make order
    createOrder: async (req, res) => {
		const { userId } = req.query;
		const { orderId, products } = req.body;
		try {
			const insOrder = await exec("store_orders", {
				userId,
				orderId,
				products,
			});
			if (insOrder) {
				return res.status(201).json({
					status: 201,
					success: true,
					message: "Success, order created",
				});
			}
		} catch (error) {
			console.log(error.message);
			res.status(500).json({
				status: 500,
				success: false,
				message: error.message,
			});
		}
	},
    
    getOrders: async (req, res) => {
		try {
			const users = await exec("all_orders");
			return res.status(201).json({
				status: 201,
				success: true,
				message: `all orders retrieved`,
				data: users.recordset,
			});
		} catch (error) {
			console.log(error.message);
			return res.status(500).json({
				status: 500,
				success: false,
				message: error.message,
			});
		}
	}

}
