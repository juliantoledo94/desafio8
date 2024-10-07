/* import { required } from "joi"; */
import mongoose from "mongoose";

const cursosSchema = new mongoose.Schema({
    titulo:{
        type:String,
        required:true

    },
    descripcion:{
        type:String,
        required:true
    }
})

export default mongoose.model("cursos",cursosSchema)