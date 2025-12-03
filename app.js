import express from "express";
import employees from "./db/employees.js";

const app = express();
// GET / index file
app.route("/").get((req, res)=> {
    return res.send("Hello employees!");
});
// GET / employees
app.route("/employees").get((req, res)=>{
    return res.send(employees);
});
// GET / employees / random to get random employee

app.route("/employees/random").get((req, res)=>{
    let randomID = Math.floor(Math.random() * employees.length);
    console.log(randomID);
    const randomEmployee = employees[randomID];

    return res.send(randomEmployee);
});

// GET / employees / : id send given id employee

app.route("/employees/:id").get((req, res)=> {
    const { id } = req.params;
    const employee = employees.find(emp => emp.id === +id)
    if(!employee) {
        return res.status(404).send("There is no employee with that ID!");
    }
    return res.send(employee);
});

export default app;