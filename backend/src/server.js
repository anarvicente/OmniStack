const  express = require("express");
const  mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const routes   = require("./routes");


const app = express();

mongoose.connect("mongodb+srv://omnistack:omnistack@omnistack-mk69f.mongodb.net/semana09?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar o corpo da req (edição, cadastro etc)

app.use(cors());
// para o express entender o body em formato json
app.use(express.json()); 
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

app.listen(3333);