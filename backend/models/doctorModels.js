import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: {type: String, require:true},
    email: {type: String, require:true, unique:true},
    password: {type: String, require:true},
    image: {type: String, require:true},
    specialist: {type: String, require:true},
    degree: {type: String, require:true},
    experience: {type: String, require:true}

})