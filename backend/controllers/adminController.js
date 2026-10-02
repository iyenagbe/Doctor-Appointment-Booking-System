



// This is the admin controller for handling doctors 
const addDoctor = async (req, res) => {

    try{
        const { name, email, password, specialist, degree, experience, about, fees, addresss } = req.body;
        const profileImage = req.file ? req.file.path : null;

        // Create a new doctor instance
        const newDoctor = new Doctor({
            name,
            email,
            password,
            specialist,
            degree,
            experience,
            about,
            fees,
            addresss,
            profileImage
        });

        // Save the doctor to the database
        const savedDoctor = await newDoctor.save();

        res.status(201).json(savedDoctor);
    } catch(error) {

    }
}


export { addDoctor };