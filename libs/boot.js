module.exports = app => {
  app.db.sequelize.sync().done(() => {  //sincroniza alterações nas tabelas do banco de acordo com os modelos da aplicação
    app.listen(app.get("port"), () => [
        console.log(`NTask API = porta ${app.get("port")}`)
    ])
  })
}
