import estudianteModel from "../model/estudiantesModel.js"


export const getEstudiantes = async(req,res) =>{
    try {
        
        const estudiantes = await estudianteModel.find().populate('curso');
        console.log(estudiantes); // Esto imprime el resultado en la consola
        res.json(estudiantes)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const createEstudiantes = async(req,res) =>{
    try {
        const estudiante = new estudianteModel({...req.body})
        const newEstudiante = await estudiante.save();
        res.json(newEstudiante);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const getEstudiantesById = async(req,res) =>{
    try {
        const estudiante = await estudianteModel.findById(req.params.id);
        if(!estudiante) return res.status(400).json({error:"not found"})
        res.json(estudiante);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
export const updateEstudiantes = async(req,res) =>{
    try {
        const updated = await estudianteModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(updated);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
export const deleteEstudiantes = async(req,res) =>{
    try {
        const deleted = await estudianteModel.findByIdAndDelete(req.params.id)
        res.json(deleted);

        
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


/* export const searchByCurso = async(req,res) =>{
    try {
        const cursos = req.query.curso.split(",")
    } catch (error) {
        res.status(400).json({error: error.message})
    }

} */