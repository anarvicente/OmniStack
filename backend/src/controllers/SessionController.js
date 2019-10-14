const User = require("../models/User");



// index, show, store, update, destroy

module.exports = {
    async store(req, res) {
        // const email = req.body.email;
        const { email } = req.body;

        // como a variavel tem o mesmo nome do atributo
        // entao pode deixar na forma reduzida
        // let user = await User.findOne({ email: email })
        // comando LET permite a variavel mudar de valor
        // o comando CONST nao
        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email }); 
        }

        return res.json(user);
    }
};