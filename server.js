const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))


mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://belyaevai86:YaLO3lOZvzWcybyt@cluster0.6auqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

app.use(express.static('public'))



const messageSchema = {
    name: String,
    email: String,
    phone: String,
    message: String
}

const Message = mongoose.model('Mymessage', messageSchema)

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res) =>{
    let newMessage = new Message ({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message
    })
    newMessage.save()
    res.sendFile(__dirname + '/answer.html')
})

app.listen(4000, ()=>{
    console.log("Server is working on 4000 port")
})