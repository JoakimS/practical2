const express =require('express')
const app = express()
const port = process.env.PORT || 5000


app.get('/home', (req, res) => {
    res.send('second page!')
}
)



app.listen(port, () => {  
    console.log(`Example app listening on port ${port}`)
}
)
