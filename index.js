import express from 'express';
const app = express();
import { engine } from 'express-handlebars';
import Post from './views/models/Post.js'

// Configuração da Template Engine
app.engine('handlebars', engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true, // Desabilita a verificação
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'handlebars');

//BodyParser
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Rotas

app.get('/', function(req, res){
    Post.findAll({order: [['id', 'desc']]}).then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cad', function(req, res) {
    res.render('formulario')
});

app.post("/pos", function(req,res){
    
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Ocorreu um erro na criação do Post!')
        console.log(erro)
    })

})

app.get("/deletar/:id", function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send(`Essa postagem não existe!`)
    })
})

const port = process.env.PORT || 2603;

app.listen(port, () => {
  console.log("Servidor rodando na porta " + port);
});
