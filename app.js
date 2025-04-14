const express =require('express')
const app = express()
const port = 5000


app.get('/home', (req, res) => {
    res.send('first page!')
}
)



app.listen(port, () => {  
    console.log(`Example app listening on port ${port}`)
}
)