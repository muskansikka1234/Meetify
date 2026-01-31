import express from "express";
import {createServer} from "node:http";
import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import { connectToSocket } from "./Controllers/socketManager.js";
import userRoutes from "./Routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000));
app.use(cors());

app.use(express.json({linit : "40kb"}));
app.use(express.urlencoded({limit : "40kb", extended : true}));

app.use("/api/v1/users", userRoutes);


const start = async () => {
    const connectionDB = await mongoose.connect("mongodb+srv://Muskan:Waheguruji@cluster0.j7djvvv.mongodb.net");
    console.log(`MONGO CONNECTED DB HOST : ${connectionDB.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("LISTENING ON PORT 8000");
    });
}

start();