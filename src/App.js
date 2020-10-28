import React from 'react'
import Mensagem from './components/Mensagens'

export default class App extends React.Component {

  state = {
    usuario: "",
    msg: "",
    historico: [],
  }

  digitaUsuario = (event) => {
    this.setState({
      usuario: event.target.value
    })
  }

  digitaMensagem = (event) => {
    this.setState({
      msg: event.target.value
    })
  }

  Enviar = () => {
    const novaMsg = {
      usuario: this.state.usuario,
      mensagem: this.state.msg
    }

    this.setState({
      historico: [...this.state.historico, novaMsg]
    })
    this.state.usuario = ""
    this.state.msg = ""
  }

  render() {
    const historico = this.state.historico.map(
      (msg) => {
        return (
          <Mensagem msg={msg} />
        )
      }
    )
    

  return (
  <div className="ContainerPai">
    <div className="Container">
      <span className="BoxMsg">{historico}</span>
        
        <div className="CampoMsg">
          <input className="inputUser" placeholder="Usuário" value={this.state.usuario} onChange={this.digitaUsuario}></input>
          <input className="inputMsg" placeholder="Mensagem" value={this.state.msg} onChange={this.digitaMensagem}></input>
          <button className="btnSubmit" onClick={this.Enviar}>Enviar</button>
        </div>
    </div>
  </div>
  );
 }
}
