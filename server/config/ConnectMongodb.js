import mongoose from "mongoose";

const createConnection = () => {
    mongoose
        .connect("mongodb://172.27.0.3:27017/Persona", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("conectado a la BD correctamente");
        })
        .catch((e) => {
            console.log(e);
        });
};

export default createConnection;