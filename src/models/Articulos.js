import mongoose from 'mongoose';
const { Schema, model } = mongoose
const articulosSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            trim: true,
        },
        stock: {
            type: Number,
            trim: true,
            default: 0,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

export default model('Articulos,', articulosSchema);
