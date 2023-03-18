import { Schema, model } from "mongoose";

const celularEsquema = new Schema(
    {
        clave: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        marca: {
            type: String,
            required: true,
        },
        precio: {
            type: String,
            required: true,
        },
        fechaLanzamiento: {
            type: String,
            required: true,
        },
        RAM: {
            type: String,
            required: true,
        },
        almacenamiento: {
            type: String,
            required: true,
        },
        cantCamaras: {
            type: String,
            required: true,
        },
        opcion: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false
    }
);

//Se crea el modelo de datos como quiero que se llame la collection
export default model("Celulares", celularEsquema);