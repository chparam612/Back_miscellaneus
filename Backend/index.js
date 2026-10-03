const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
const port = 8080;

// app.get("/register", (req,res) => {
//     res.send("Standard Get Response");
// })

app.get("/register", (req,res) => {
    let {name, email} = req.query;
    res.send(`Standard Get Response, Welcome ${name}!`);
});

// app.post("/register", (req,res) => {
//     res.send("Standard POST Response");
// })

app.post("/register", (req,res) => {
    let {name,email} = req.body;
    res.send(`Standard POST Response, Welcome ${name}!`);
})

app.listen(port, ()=>{
    console.log(`App is listening on port: ${port}`);
})