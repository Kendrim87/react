import React from 'react';
import './App.css';

// Componente principal App usando la sintaxis de clase como se indica en los apuntes
class App extends React.Component {

    // Constructor del componente con estado inicial
    constructor(props) {
        // Llamada obligatoria a super()
        super(props);

        // Estado inicial con los datos de la persona y datos del formulario
        this.state = {
            // Datos actuales de la persona
            nombre: 'Mario',
            apellidos: 'Bros.',
            foto: 'https://i.pinimg.com/564x/3f/81/4d/3f814d3ac439bb5c568332204994738d.jpg',
            edad: 39,
            
            // Datos temporales del formulario (componentes controlados)
            formNombre: 'Mario',
            formApellidos: 'Bros.',
            formFoto: 'https://i.pinimg.com/564x/3f/81/4d/3f814d3ac439bb5c568332204994738d.jpg',
            formEdad: 39
        };
    }

    // Manejador para cambios en los campos del formulario
    manejarCambio(campo, evento) {
        // Usar setState para actualizar el estado y que se actualice la vista
        this.setState({ [campo]: evento.target.value });
    }

    // Manejador para el envío del formulario
    actualizarDatos(evento) {
        // Prevenir comportamiento por defecto del formulario
        evento.preventDefault();

        // Actualizar los datos principales con los valores del formulario
        this.setState({
            nombre: this.state.formNombre,
            apellidos: this.state.formApellidos,
            foto: this.state.formFoto,
            edad: parseInt(this.state.formEdad)
        });
    }

    // Método render que define la estructura JSX del componente
    render() {
        return (
            <div className="container">
                <h1>Datos de Persona</h1>
                
                {/* Sección no editable - Mostrar datos */}
                <div className="datos-persona">
                    <h2>Información Actual</h2>
                    <div className="persona-card">
                        <img 
                            src={this.state.foto} 
                            alt={this.state.nombre + ' ' + this.state.apellidos} 
                            className="foto-persona"
                        />
                        <div className="info">
                            <p><strong>Nombre:</strong> {this.state.nombre}</p>
                            <p><strong>Apellidos:</strong> {this.state.apellidos}</p>
                            <p><strong>Edad:</strong> {this.state.edad} años</p>
                        </div>
                    </div>
                </div>
                
                {/* Sección editable - Formulario */}
                <div className="formulario-edicion">
                    <h2>Editar Datos</h2>
                    <form onSubmit={(e) => this.actualizarDatos(e)}>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input 
                                type="text" 
                                id="nombre" 
                                value={this.state.formNombre}
                                onChange={(e) => this.manejarCambio('formNombre', e)}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="apellidos">Apellidos:</label>
                            <input 
                                type="text" 
                                id="apellidos" 
                                value={this.state.formApellidos}
                                onChange={(e) => this.manejarCambio('formApellidos', e)}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="foto">URL de la Fotografía:</label>
                            <input 
                                type="url" 
                                id="foto" 
                                value={this.state.formFoto}
                                onChange={(e) => this.manejarCambio('formFoto', e)}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="edad">Edad:</label>
                            <input 
                                type="number" 
                                id="edad" 
                                value={this.state.formEdad}
                                onChange={(e) => this.manejarCambio('formEdad', e)}
                                min="0"
                                max="120"
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn-actualizar">Actualizar Datos</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default App;
