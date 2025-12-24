import { v2 as cloudinary } from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';

cloudinary.config({ 
        cloud_name: 'dal9lszpg', 
        api_key: '233567135364896', 
        api_secret: 'B0YmezpxS3whcQjhyK7i5OCjQ58' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);


    //

    const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'some-folder-name',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => 'computed-filename-using-request',
  },
});
 
export const uploads = multer({ storage: storage });

console.log(uploadResult)

    

    // npm install multer-storage-cloudinary --force