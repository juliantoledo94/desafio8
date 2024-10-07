/* import { ref, required } from "joi"; */
import mongoose,{Schema} from "mongoose";

const estudiantesSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    curso:{
        type: Schema.Types.ObjectId, 
        ref: "cursos",
        required: true
    }
})

export default mongoose.model("estudiantes",estudiantesSchema)