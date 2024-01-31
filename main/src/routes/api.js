const express =require('express');
const BrandController =require('../controllers/BrandController');
const CategoryController =require('../controllers/CategoryController');
const ProductController =require('../controllers/ProductController');
const UserController =require('../controllers/UserController');
const ProfileController =require('../controllers/ProfileController');
const InvoiceController =require('../controllers/InvoiceController');
const router =express.Router();



//Brand 
router.get('/BrandList',BrandController.BrandList);
router.get('/CategoryList',CategoryController.CategoryList);

//Product
router.get('/SliderList',ProductController.SliderList);
router.get('/ListByCategory',ProductController.ListByCategory);
router.get('/ListBySimilier',ProductController.ListBySimilier);
router.get('/ListByBrand',ProductController.ListByBrand);
router.get('/ListByKeyword',ProductController.ListByKeyword);
router.get('/ListReview',ProductController.ListReview);
router.get('/ProductDetails',ProductController.ProductDetails);
router.get('/ListByRemark',ProductController.ListByRemark);
router.get('/WishList',ProductController.WishList);
router.get('/CreateWishList',ProductController.CreateWishList);
router.get('/RemoveWishList',ProductController.RemoveWishList);
router.get('/CartList',ProductController.CartList);
router.get('/CreateCartList',ProductController.CreateCartList);
router.get('/RemoveCartList',ProductController.RemoveCartList);


//user
router.get('/UserLogin',UserController.UserLogin);
router.get('/VeryfyLogin',UserController.VeryfyLogin);
router.get('/VeryfyLogin',UserController.VeryfyLogin);


//profile
router.get('/CreateProfile',ProfileController.CreateProfile);
router.get('/ReadProfile',ProfileController.ReadProfile);
router.get('/UpdateProfile',ProfileController.UpdateProfile);


//invoice
router.get('/InvoiceCreate',InvoiceController.InvoiceCreate);
router.get('/InvoiceList',InvoiceController.InvoiceList);
router.get('/InvoiceProductList',InvoiceController.InvoiceProductList);
router.get('/PaymentSuccess',InvoiceController.PaymentSuccess);
router.get('/PaymentCancel',InvoiceController.PaymentCancel);
router.get('/PaymentFail',InvoiceController.PaymentFail);
router.get('/PaymentIPN',InvoiceController.PaymentIPN);

// Undefined Route Implement
router.get('*', (req, res) => {
    res.status(404).json({ status: "fail", data: "Not Found" });
});


module.exports = router;