import React, { Component } from 'react';
import Tabla from './Tabla';


class App extends Component {
    state = {
        personas: [
            {
                nombre: 'Clark',
                apellido: 'Kent',
            },
            {
                nombre: 'Bruce',
                apellido: 'Wayne',
            },
            {
                nombre: 'Peter',
                apellido: 'Parker',
            },
            {
                nombre: 'Selina',
                apellido: 'Kyle',
            },
        ],
    }

    eliminarPersona = (indice) => {
        const { personas } = this.state

        this.setState({
            personas: personas.filter((personas, i) => {
                return i !== indice;
            }),
        });
    }
    render(){
        const {personas} = this.state;
        return (
            <div className="container">
                <h1>Tutorial de React de Neoguias!</h1>
                <Tabla datosPersonas={personas} eliminarPersona={this.eliminarPersona} />
            </div>
        )
    }
}
export default App;