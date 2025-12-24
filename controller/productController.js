import product from "../models/product.js"

// export const createProduct = async (req, res) => {
//     try {
//         // For multiple images
//         console.log(req.files);
        
//         const images = req.files ? req.files.map(file => ({
//             url: file.path,
//             public_id: file.filename
//         })) : [];

//         const { name, price, description, stock, category, features, specifications } = req.body;
        
//         const data = await product.create({
//             name,
//             price,
//             description,
//             stock,
//             category,
//             images,
//             features,
//             specifications
//         });
        
//         res.status(201).json({
//             message: "Product created successfully",
//             data
//         });
//     } catch (error) {
//         return res.status(400).json({
//             message: "Product failed to create",
//             error: error.message
//         });
//     }
// };

export const createProduct = async (req, res) => {
    try {
        // Handle Images
        const images = req.files ? req.files.map(file => ({
            url: file.path,
            public_id: file.filename
        })) : [];

        // Extracting new fields: colors and sizes
        const { 
            name, 
            price, 
            description, 
            stock, 
            category, 
            features, 
            specifications,
            colors, // Added
            sizes   // Added
        } = req.body;
        
        // Note: If sending via FormData, colors/sizes might arrive as strings. 
        // We ensure they are handled as arrays by the Mongoose model.

        const data = await product.create({
            name,
            price,
            description,
            stock,
            category,
            images,
            features,
            specifications,
            colors: colors || [], // Default to empty if not provided
            sizes: sizes || []    // Default to empty if not provided
        });
        
        res.status(201).json({
            message: "Product created successfully",
            data
        });
    } catch (error) {
        console.error("Create Error:", error.message);
        return res.status(400).json({
            message: "Product failed to create",
            error: error.message
        });
    }
};










export const getAllProduct = async (req, res) => {
    try {
        const result = await product.find();
        
        res.status(200).json({
            message: "Products found successfully",
            data: result
        });

    } catch (error) {
        console.log("Error occurred:", error.message);
        res.status(400).json({
            message: "Error occurred to get all products",
            error: error.message
        });
    }
};



















// export const createProduct= async(req,res)=>{
//     try{
//         //for image
//         console.log(req.file)
//         const image= req.file.path
//         // return res.status(200).json({message:"image sent"})


//         const{name, price,description,stock,ratings,category}=req.body
//         const data= await product.create({
//             name:name,
//             price:price,
//             ratings:ratings,
//             stock:stock,
//             description:description,
//             category:category,
//             image:image


//         })
//         res.status(200).json({
//             message:"product created successfully",data
//         })
//     }
//     catch(error){
//         return res.status(401).json({
//             message: "product failed to create",error:error.message
//         })
//     }
// }



// export const getAllProduct=async(req,res)=>{
//     try {
//       const result = await  product.find().populate("category")
//           res.status(200).json({
//             message : "product Found successfully",
//             data : result
//         })

//     } catch (error) {
//          console.log("error ocured",error.message);
//         res.status(400).json({
//             message : "error occured to Get all  product",
//             error : error.message
//         }) 
//     }
// }


// export const findproduct= async(req,res)=>{
// try{
//     const result= await product.find()
//     res.status(200).json({
//         message: "product find successfulyy",
//         product: result
//     })

// }
// catch(error){
//     console.log("error to find product", error.message);
//     res.status(400).json({
//         message: "eroor to find product",
//         error: error.message
//     })

// }
// }



export const findproductById= async(req,res)=>{
try{
    const id = req.params.id
    const result= await product.findById(id)
    res.status(200).json({
        message: "product find successfulyy",
        product: result
    })

}
catch(error){
    console.log("error to find product", error.message);
    res.status(400).json({
        message: "eroor to find product",
        error: error.message
    })

}
}








