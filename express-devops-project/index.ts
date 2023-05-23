import express from 'express'

const app = express();

app.get("/", (req, res, next) => {
    res.json({
        data: "This is a express application."
    })
})

app.listen(3939, () => console.log(`Server is up and running on 3939`))
