const express = require("express");
const app = express();

app.use(express.json({ limit: "10kb" }));

app.get("/", (req, res) => {
    res.send("Healthcare DevSecOps Application");
});

app.get("/health", (req, res) => {
    res.json({ status: "healthy" });
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Healthcare app running on port 3000");
});

