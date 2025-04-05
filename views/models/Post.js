import db from './db.js';

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    
    conteudo: {
        type: db.Sequelize.STRING
    }
})

export default Post