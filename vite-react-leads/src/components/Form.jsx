import React from "react";
import "./Form.css";
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            numPhone: ''
        }
    }

    handleChande = (event) => { }
    render() {
        const name = this.state.name;
        const email = this.state.email;
        const numPhone = this.state.numPhone;
        return (
            <aside>
                <h2>Insira novos leads</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>

                <form>

                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" placeholder="Ex.: Rodrigo" onChange={this.handleChande} />
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" placeholder="Ex.: user@email.com" onChange={this.handleChande} />
                        </div>

                    </div>
                    <div>
                        <label htmlFor="numPhone">Celular</label>
                        <input type="text" id="numPhone" placeholder="Ex.: 11 98765-4321" onChange={this.handleChande} />
                    </div>
                    <button>Cadastrar</button>
                </form>
            </aside>
        );
    }
}

export default Form;