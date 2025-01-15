import "dotenv/config";
import "../database/conn.js";
import e from "express";
import connection_router from "../http/routers/connection_router.js";
import post_router from "../http/routers/post_router.js";
import request_router from "../http/routers/request_router.js";
import user_router from "../http/routers/user_router.js";
const app = e();

app.use(e.json());

app.use("/connection", connection_router);
app.use("/post", post_router);
app.use("/request", request_router);
app.use("/user", user_router);


app.listen(process.env.PORT, () => console.log("App running!"));