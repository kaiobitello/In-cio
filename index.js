import express from 'express';
const app = express();
import { engine } from 'express-handlebars';
import Post from './views/models/Post.js'
import db from './views/models/db.js';

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

db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso.');
  })
  .catch((error) => {
    console.error('Erro ao sincronizar tabelas:', error);
  });
  
    // INICIA O SERVIDOR SÓ DEPOIS
    app.listen(10000, () => {
      console.log('Servidor rodando na porta 10000')
    })
