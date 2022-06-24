import express from 'express';
import indexRoutes from './routes/index.routes.js';
import morgan from 'morgan'
import './database.js'

//**------ iniciando servidor--- */
const app = express();
const PORT = 3000;

app.listen(PORT);
console.log(`Servidor en puerto http://localhost:${PORT}`);

//**----------- */

//!middlewares
//**----------- */
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//!routes
app.get('/', (req, res) => {
    res.json({ Mensaje: 'Bienvenidos' });
}); 
app.use('/api/articulos', indexRoutes);
