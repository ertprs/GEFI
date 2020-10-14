module.exports = (req, res, next) =>{
    if(!req.session.usuario){
        return res.json({'msg':'usuario nao tem privilegio para acessar a api'});
    }else{
        next();
    }
};