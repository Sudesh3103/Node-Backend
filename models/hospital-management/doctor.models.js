import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: Number,
        required: true 
    },
    qualification:{
        type: String,
        required: true
    },
    specialization:{
        type: String,
        required: true
    },
    worksInHospital:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        required: true
    },
    experience:{
        type: Number,
        required: true
    }
},{timestamps:true});

export const Doctor = mongoose.model("Doctor", doctorSchema);