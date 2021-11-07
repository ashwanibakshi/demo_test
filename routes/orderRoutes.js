const express   = require("express");
const router    = express.Router();
const orderController = require("../controller/orderController");

router.post('/placeorder',orderController.addOrder)
router.post('/addcustomer',orderController.addCustomerDetail)
router.get('/showallcustomer',orderController.showAllCustomers)
router.post('/addproduct',orderController.addProduct);

module.exports = router;