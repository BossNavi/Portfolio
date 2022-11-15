const express = require("express")
const app = express()
const path = require("path")

const PORT = 5000

// Middleware
// app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use(express.static(path.join(__dirname, "/Assets")))
app.use("/Images",express.static(path.join(__dirname, "/Assets/Images")))
app.set("view engine", "hbs")

// Define Routes
app.use('/', require("./Routes/pages"))

app.listen(PORT, (res, req) => {
    console.log(`Server is running, http://localhost:${PORT}`)
})