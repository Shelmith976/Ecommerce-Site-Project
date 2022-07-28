const poolPromise = require('../config/poolPromise');

module.exports = {
  //Create product
  createProduct: async (req, res) => {
    let { productName, description, price, category, productImage } = req.body;
    try {
      let pool = await poolPromise();
      pool
        .request()
        .input('productName', productName)
        .input('description', description)
        .input('price', price)
        .input('category', category)
        .input('productImage', productImage)
        .execute(`addProducts`)
        .then((results) => {
          if (results.rowsAffected) {
            res.send('Product has been successfully added');
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  },
  //update products
  updateProduct: async (req, res) => {
    let { productId, productName, description, price, category, productImage } =
      req.body;
    try {
      let pool = await poolPromise();
      pool
        .request()
        .input('productId', productId)
        .input('productName', productName)
        .input('description', description)
        .input('price', price)
        .input('category', category)
        .input('productImage', productImage)
        .execute(`updateProducts`)
        .then((results) => {
          if (results.rowsAffected) {
            res.send('Product has been successfully updated');
          }
        });
    } catch (err) {
      console.log(err.message);
    }
  },
  //Get all available products
  viewProducts: async (req, res) => {
    let pool = await poolPromise();
    pool.query(`select * from Products`).then((results) => {
      if (results.recordset) {
        return res.status(200).json({
          status: 200,
          success: true,
          message: 'These are all the products',
          results: results.recordset,
        });
      }
      res.status(404).json({
        status: 404,
        success: false,
        message: 'There are no products to view',
        results: {},
      });
    });
  },

  pageProduct: async (req, res) => {
    let pool = await poolPromise();
      const results= await
              pool.request()
              .input('row_count', req.query.row_count)
              .input('page_number',req.query.page_number)
              .execute("paginator").then(results=>{
                  res.json(results.recordset)
              })
      
      },
  //Search products by name
  getProduct: async (req, res) => {
    const { productName } = req.params;
    let pool = await poolPromise();
    pool
      .query(
        `select productId,productName,description,price,category from Products where productName='${productName}'`
      )
      .then((results) => {
        let products = results.recordset[0];
        if (products) {
          return res.status(200).json({
            status: 200,
            success: true,
            message: 'You found the product',
            results: products,
          });
        }
        res.status(404).json({
          status: 404,
          success: false,
          message: 'No product with that name',
          results: {},
        });
      });
  },
  searchProduct: async (req, res) => {

    try {
        let pool = await poolPromise()
        const result=await pool.request()
        .input('productName',req.query.productName)
        .execute(`SearchProduct`)
        const products=result.recordset;
            res.json(products)
       
    } catch (err) {
        res.status(500)

    }
},
};
 