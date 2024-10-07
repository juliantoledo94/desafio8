import cursosModel from "../model/cursosModel.js";

export const getCursos = async(req,res) =>{
    try {
        const cursos = await cursosModel.find();
        res.json(cursos)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

export const createCursos = async(req,res) =>{
    try {
        const curso = new cursosModel({...req.body})
        const newCurso = await curso.save();
        res.json(newCurso);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}