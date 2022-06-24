import express from 'express';
import indexRoutes from './routes/index.routes.js';
import morgan from 'morgan';
import './database.js';
import { extname } from 'path';
const path = require('path');

//**------ iniciando servidor--- */
const app = express();
const PORT = 3000;

app.listen(PORT);
console.log(`Servidor en puerto http://localhost:${PORT}`);

//**----------- */

//!middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    muter({
        storage,
        dest: path.join(__dirname, './public/upload'),
    }).single(/*desde donde viene */)
);
//**----------- */
//!routes
app.get('/', (req, res) => {
    res.json({ Mensaje: 'Bienvenidos' });
});
app.use('/api/articulos', indexRoutes);

//!Seteo - plantillas
//TODO---- configuracion para hbs /
// app.set('views', path.join(__dirname, 'views'));
// app.engine(
//     '.hbs',
//     engine({
//         defaultLayout: 'main',
//         layoutsDir: path.join(app.get('views'), 'layouts'),
//         extname: '.hbs',
//     })
// );
// app.set('view engine', 'hbs');
