let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const {text, time} = req.body; 
        messages.push({id, text, time});
        id++;
        res.status(200).send(messages);
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        const {text} = req.body;
        const updateID = parseInt(req.params.id);
        const i = messages.findIndex(e => e.id === updateID);
        let message = messages[i]

        messages[i] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        }
        res.status(200).send(messages);
    },
    delete: (req, res) => {
        const i = messages.findIndex(e => e.id === req.params.id)
        messages.splice(i, 1);
        res.status(200).send(messages);
    }
}
