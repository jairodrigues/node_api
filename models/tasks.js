module.exports = app => {
    return{
        findAll: (params, callback) =>{
            return callback([
                {title: "Fazer Compras"},
                {title: "Concertar o PC"}
            ])
        }
    }
}