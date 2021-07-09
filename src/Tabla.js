import React, { Component } from 'react';
import HeadTabla from './HeadTabla';
import BodyTabla from './BodyTabla';

class Tabla extends Component {
    render() {
        return (
            <table className="table">
                <HeadTabla/>
                <BodyTabla/>
            </table>
        );
    }
}

export default Tabla;