import React from 'react'

export default class Mensagem extends React.Component {
    render () {
        return <div className= "campoMsg">
          <div className="BoxMsg">
          <br/>
            <strong><p>{`${this.props.msg.usuario}`}</p></strong><br/>
            <p>{this.props.msg.mensagem}</p>
            <br/>
          </div>
        </div>
    }
}
