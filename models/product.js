// import mongoose from "mongoose";

// const  product= mongoose.model('Product',new mongoose.SchemaTypeOptions({
//    name: {type: String, required: true}, 
//    price:{type: String, },
//    description:{type: String, required: true},
//    stock:{type: Number},
//    ratings:{type: Number},
//    category:{type: mongoose.SchemaTypes.ObjectId,ref:'category' , required: false},
//    image:{type: String}
// }))

// export default product

// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//     name: {type: String,required: [true, 'Product name is required'],trim: true},

//     description: {type: String,required: [true, 'Product description is required']},

//     price: {type: Number, required: [true, 'Product price is required'],min: [0, 'Price cannot be negative']},

//     category: {type: String, required: true, enum: ['Drones', 'Robotic Arms', 'Sensors', 'Kits', 'Other'] },

//     images: [{url: String, public_id: String}],

//     features: [String],

//     stock: {type: Number,default: 0, min: 0 },
    
//     specifications: {weight: String,dimensions: String,power: String,compatibility: [String]}
// }, { 
//     timestamps: true 
// });

// const Product = mongoose.model('Product', productSchema);
// export default Product;



import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Product name is required'], trim: true },
    description: { type: String, required: [true, 'Product description is required'] },
    price: { type: Number, required: [true, 'Product price is required'], min: [0, 'Price cannot be negative'] },
    
    // Updated category to include 'Clothing'
    category: { 
        type: String, 
        required: true, 
        enum: ['Drones', 'Robotic Arms', 'Sensors', 'Kits', 'Clothing', 'Other'] 
    },

    images: [{ url: String, public_id: String }],
    features: [String],
    stock: { type: Number, default: 0, min: 0 },

    // ADDED: Optional fields for flexible products
    colors: { type: [String], default: [] }, // e.g., ["Matte Black", "Silver"] or ["Red", "Blue"]
    sizes: { type: [String], default: [] },  // e.g., ["Large", "Small"] or ["S", "M", "L", "XL"]

    specifications: {
        weight: String,
        dimensions: String,
        power: String,
        compatibility: [String]
    }
}, { 
    timestamps: true 
});

const Product = mongoose.model('Product', productSchema);
export default Product;