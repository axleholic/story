import express from "express";
import bodyParser from "body-parser";



const app  = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let newTasks = [];

app.get("/", (req,res) =>{
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today  = new Date();
    const dateNow = today.toLocaleDateString("en-US", options);
    const data = {
        title: "Todo List App",
        dateToday: dateNow,
        newItems: newTasks,
    }
   res.render("index.ejs", data); 
});

app.post("/submit", (req,res) =>{
    const newTask = req.body["newItem"];
    newTasks.push(newTask);
    res.redirect("/")
    
});

app.listen (port, () =>{
    console.log(`Server is Running on port ${port}`);
});



