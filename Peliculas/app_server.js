const express=require("express");
const app=express();
app.use(express.json());

app.use("/movies"); // Acceso a carpeta movie
app.use("/user"); // Acceso a carpeta user

// Iniciar servidor
app.listen(3000,()=>console.log("Servidor levantado en el puerto 3000"));