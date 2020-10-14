const Equipamento = require('../models/equipamentos')
const autenticador	=	require('../middlewares/autenticador');


module.exports = (app) => {


    app.post('/login', (req, res) => {
        const usuario = req.body;
        /*
        usuario.buscarPorLoginEsEHA(usuario, senha);
        if(usuario){
            req.session.usuario = usuario;
        }
*/
    });


    app.get('/logout', (req, res)=>{
        /*
        req.session.destroy();
        res.redirect('/');
        */
    });


}