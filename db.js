import fs from "fs"
import path from "path"
import Sequelize from 'sequelize'

let db = null;

module.exports = app => {
  if(!db){
    const config = app.libs.config
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
    )
    db = {
      sequelize,
      Sequelize,
      models: {}
    }
    const dir = path.join(__dirname, "models")
    // retornar	um	array	de	strings	referente	aos	nomes de arquivos	existentes	no	diretório models
    fs.readdirSync(dir).forEach(file  => {
      const modelDir = path.join(dir, file)
      const model = sequelize.import(modelDir)
      db.models[model.name] = model
    })
    // garante o relacionamento	correto	entre	os	modelos.
    Object.keys(db.models).forEach(key => {
      db.models[key].associate(db.models)
    })
  }
  return db
}
