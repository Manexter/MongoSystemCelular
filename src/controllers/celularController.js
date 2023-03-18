import Celulares from "../models/Celulares";

export const renderCelulares = async (req,res) => {
    const celulares = await Celulares.find().lean();
    res.render("celularView", {celulares: celulares});
};

export const createCelulares = async (req,res) =>{
    try {
        const celulares = Celulares(req.body);
        await celulares.save();
        res.redirect("/agregarCelular");
    } catch (error) {
        console.log(error);
    }
};

export const renderEditCelulares = async(req,res) => {
    try{
        const celulares = await Celulares.findById(req.params.id).lean();
        res.render("editarCelular", {celulares});
    }catch(error){
        console.log(error.message);
    }
};

export const updateCelulares = async(req,res) => {
    const {id} = req.params;
    await Celulares.findByIdAndUpdate(id, req.body);
    res.redirect("/agregarCelular");
};

export const deleteCelulares = async(req,res) => {
    const {id} = req.params;
    await Celulares.findByIdAndDelete(id, req.body);
    res.redirect("/agregarCelular");
};

export const statusCelulares = async(req,res) => {
    const {id} = req.params;
    const celulares = await Celulares.findById(id);
    //opcion esta en el Model
    celulares.opcion = !celulares.opcion;
    await celulares.save();
    res.redirect("/agregarCelular");
};