export default async function handler(req, res) {
  if (req.method === "POST") {
    const { nome, email } = req.body;
   
    alert(`${nome}, seja bem vindo!`)
  } else {
    res.status(405).json({ mensagem: "Método não permitido" });
  }
}0