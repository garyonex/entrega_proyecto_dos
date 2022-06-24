import mongoose from "mongoose";
//configuracon del env
import config from './config.js'

// export async function mongoDB (){
//     const db= await mongoose.connect('mongodb+srv://garyonex:holagary1958--@cluster0.q6x6z0v.mongodb.net/articulos?retryWrites=true&w=majority',)
//     console.log('conecado a la base de datos',db.connection.name)

// }

(async () => {
    const db = await mongoose.connect(
        config.mongodbURL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );
    console.log('database connect :', db.connection.name);
})();
