import estudianteModel from "../model/estudiantesModel.js"


export const getEstudiantes = async(req,res) =>{
    try {
        console.log(req.body); // Para verificar qué está llegando en el request
        const estudiantes = await estudianteModel.find().populate('curso');
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