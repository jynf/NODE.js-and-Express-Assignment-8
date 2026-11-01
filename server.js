const express = require("express");
const app = express();
const PORT = 3000;
//http://localhost:3000/api/resources  - address

// Middleware - parse JSON
app.use(express.json());

let resources = [
    { id: 1, name: "Desktop", category: "Computer" },
    { id: 2, name: "Shirt", category: "Clothing" },
    { id: 3, name: "Laptop", category: "Computer" },
    { id: 4, name: "TV", category: "Electronics" }

];
//next index for creating new resources
let newId = 5;



// GET: retrieve all resources
app.get("/api/resources", (req, res) => {
    res.status(200).json(resources);
});

// GET: retrieve one resource by id
app.get("/api/resources/:id", (req, res) => {
    const id = Number(req.params.id);
    const resource = resources.find(item => item.id == id);

    if (!resource) {
        return res.status(404).json({
            message: "Resource not found"
        });
    }
    res.status(200).json(resource);
});

// POST: create a new resource
app.post("/api/resources", (req, res) => {
    const { name, category } = req.body;

    if (!name || !category) {
        return res.status(400).json({
            message: "Name and category are required"
        });
    }

    const newResource = {id: newId++, name, category};
    resources.push(newResource);
    res.status(201).json(newResource);
});

// PUT: update an existing resource
app.put("/api/resources/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = resources.findIndex(item => item.id == id);

    if (index == -1) {
        return res.status(404).json({
            message: "Resource not found"
        });
    }
    const { name, category } = req.body;
    if (!name || !category) {
        return res.status(400).json({
            message: "name and category are required"
        });
    }

    resources[index] = { id, name, category};

    res.status(200).json(resources[index]);
});

// DELETE: remove a resource
app.delete("/api/resources/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = resources.findIndex(element => element.id == id);

    if (index == -1) {
        return res.status(404).json({
            message: "Resource not found"
        });
    }

    const deletedResource = resources.splice(index, 1);
    //return success and the deleted resource
    res.status(200).json({
        message: "Resource deleted successfully",
        resource: deletedResource[0]
    });
});

//start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

//logging
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();

    console.log(
        `[${timestamp}] ${req.originalUrl} ${req.method}`
    );
    next();
});
