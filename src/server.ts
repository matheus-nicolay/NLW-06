import express from "express";

const app = express();

//routes
app.get("/test", (request, response) =>{
    return response.send("SERVER RODANDO");
});

app.post("/test-post", (request, response) =>{
    return response.send("SERVER RODANDO POST");
});

app.listen(80, () =>
    console.log("Server is running")
);