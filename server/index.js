const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const messagesCtrl = require('./controllers/message_folder')

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/build'))


app.post('/api/messages', messagesCtrl.create);
app.get('/api/messages', messagesCtrl.read);
app.put('/api/messages/:id', messagesCtrl.update);
app.delete('/api/messages/:id', messagesCtrl.delete);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})