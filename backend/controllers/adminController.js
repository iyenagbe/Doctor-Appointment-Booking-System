import validator from 'validator';
import bcrypt from 'bcrypt';
import cloudinary from '../config/cloudinary.js';
import Doctor from '../models/doctorModel.js';



// This is the admin controller for handling doctors 
const addDoctor = async (req, res) => {

    try {
        const { name, email, password, specialist, degree, experience, about, fees, addresss } = req.body;
        const imageFile = req.file

        // Create a new doctor instance
        if (!name || !email || !password || !specialist || !degree || !experience || !about || !fees || !addresss || !imageFile) {
            return res.json({ success: false, message: "All fields are required" });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid email format" });
        }

        // password validation (at least 8 characters)
        if (password.length < 8) {
            return res.json({ success: false, message: "At least 8 characters long" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // upload img to cloudinary
        const imageUpload = await cloudinary.imageUploader.upload(imageFile.path, { resource_type: "image" });
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            specialist,
            degree,
            experience,
            about,
            fees,
            addresss: JSON.parse(addresss),
            date: Date.now()
        }

        const newDoctor = new Doctor(doctorData);
        await newDoctor.save();
        res.json({ success: true, message: "Doctor added successfully" });

    } catch (error) {
        console.error(error);
        res.json({ success: false, message: "Error adding doctor" });
    }
}


export { addDoctor };