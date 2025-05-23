import "./login.css"
import logo from "../../assets/imgs/Chat (1).svg"
import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {

        "Content-Type": "application/json"

      },

      method: "POST", //metodo que envia dados
      body: JSON.stringify({

        email: email,
        password: password

      })

    });

    console.log(response);

    if (response.ok == true) {


      alert("login realizado com sucesso!!")

      console.log(response)
      let json = await response.json();

      let token = json.accessToken;

      console.log("token: " + token);

      localStorage.setItem("meuToken", token)

      window.location.href = "/chat";

      

    } else {

      if (response.status == 401) {

        alert("Credenciais incorretas. tente novamente.")


      } else {

        alert("erro inesperado aconteceu, caso persista contate os administradores")


      }

      }


  }

  return (
    <>
      <main className="page-container">

        <div className="robo-image">
        </div>

        <div className="login-container">

          <img className="logo" src={logo} alt="Logo do SenaiGPT." />

          <h1

            id="meutitulo"
            className="titulo"
          >Login</h1>

          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Insira o e-mail" />
          <input className="inpt" value={password} onChange={event => setPassword(event.target.value)} type="password" placeholder="Insira a senha" />

          <button className="btn" onClick={() => onLoginClick()} >Entrar</button>

        </div>

      </main>

    </>
  )
}

export default Login