import category from "../models/category.js";




export const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const exist = await category.findOne({ name });
    if (exist) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = await category.create({
      name,
      description,
      
    });

    res.status(201).json({
      message: "Category created successfully",
      category: newCategory
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export const findCategory= async(req,res)=>{
try{
    const result= await category.find()
    res.status(200).json({
        message: "category find successfulyy",
        product: result
    })

}
catch(error){
    console.log("error to find category", error.message);
    res.status(400).json({
        message: "eroor to find category",
        error: error.message
    })

}
}