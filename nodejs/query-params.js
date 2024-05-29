const express = require('express')


const app = express()
const port = 3000

app.get('/sum/:a', (req, res) => {
    const a = parseInt(req.params.a, 10)
    const b = parseInt(req.query.b, 10)
//    const a = req.params.a;
//    const b = req.query.b

    if (!isNaN(a) && !isNaN(b)) {
        let sum = eval(a+b)
        res.send(`${sum}`)
    } else {
        return res.status(404).send('a or b is not a number')

    }
})

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});