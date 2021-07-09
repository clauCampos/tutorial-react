import React, { Component } from 'react';
import HeadTabla from './HeadTabla';
import BodyTabla from './BodyTabla';

class Tabla extends Component {
    render() {
        const { datosPersonas } = this.props;

        return (
            <table className="table">
                <HeadTabla/>
                <BodyTabla datosPersonas={datosPersonas}/>
            </table>
        );
    }
}
export default Tabla;