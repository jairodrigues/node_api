module.exports = {
  database: "ntask",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite", //especifico para sqlite(informa o diretorio que sera gravado o arquivo de database
    define: {
      underscored: true // padroniza o nome dos campos da tabela em minusculo
    }
  }
}
