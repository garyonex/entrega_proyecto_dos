import Articulos from '../models/Articulos.js';
export const mostrarTodos = async (req, res) => {
    const articulos = await Articulos.find();
    res.json(articulos);
};

export const crearArt = async (req, res) => {
    const nuevoArticulo = new Articulos({
        title: req.body.title,
        price: req.body.price,
        stock: req.body.stock,
    });
    const guardadoArticulo = await nuevoArticulo.save();
    res.json(guardadoArticulo);
};

export const buscar = async (req, res) => {
    const buscaId = await Articulos.findById(req.params.id);
    res.json(buscaId);
};

export const eliminarUno = async (req, res) => {
    await Articulos.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Articulo eliminado correctamente' });
};

export const mostrarAlgunos = async (req, res) => {
    const muestraUnica = await Articulos.find({ stock: 1});
    res.json(muestraUnica);
};
