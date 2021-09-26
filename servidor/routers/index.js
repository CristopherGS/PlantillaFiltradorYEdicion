import express from "express";
const router = express.Router();
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";

//inicializamos la app en firebase- admin
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBvjOpa-uBTfA_pBzo3MbO72dQabPRNUO0",
  authDomain: "proyecto-gloasario.firebaseapp.com",
  databaseURL: "https://proyecto-gloasario-default-rtdb.firebaseio.com",
  projectId: "proyecto-gloasario",
  storageBucket: "proyecto-gloasario.appspot.com",
  messagingSenderId: "909726365107",
  appId: "1:909726365107:web:10056c5752f289ecc047c6",
  measurementId: "G-H8LV0V60PQ",
});
const db = getFirestore();

//creamos un renrutador para la parte principal
router.get("/", async (req, res) => {
  // req - lo que enviamos: res - lo que express nos responde
    let data = await getdatos();
    res.json(data);
    
});

async function getdatos(){
  let a = []
  const consulta = await getDocs(collection(db, 'users'));
  consulta.forEach((doc) => 
      a.push(doc.data())
  )
  return a;
}




//creamos un post para enviar los datos
router.post("/");

export default router;
