import express from "express";
import router from "./routers/index.js";

const app = express();

//definir el puerto
const port = process.env.PORT || 3000;

//agregamos un router
app.use("/", router);

//definir la carpeta publica
app.use(express.static("public"));

//habilitar pug
app.set("view engine", "pug");

app.listen(port, () => {
  console.log("Servidor encendido Puerto: ", port);
});
