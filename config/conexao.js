import mongoose from "mongoose";

const url = "mongodb+srv://cleriosantosg_db_user:RVxuDJH3r7T4n1au@clerio.hppypoi.mongodb.net/?retryWrites=true&w=majority";

const conexao = await mongoose.connect(url);

export default conexao;