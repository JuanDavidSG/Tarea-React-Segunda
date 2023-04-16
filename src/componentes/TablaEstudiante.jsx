import { useState } from "react"

export const TablaEstudiante = ({ listaEstudiantes, editarEstudiante}) => {

    const [filtroNombre, setFiltroNombre] = useState("");

    const filtrarEstudiantes = (estudiantes, filtroNombre) => {
        return estudiantes.filter((estudiante) =>
            estudiante.nombre.toLowerCase().includes(filtroNombre.toLowerCase())
        );
    };

    const estudiantesFiltrados = filtrarEstudiantes(listaEstudiantes, filtroNombre);
    
    return (
        <>
            <br />
            <table class="table table-dark">
                <thead >
                    <tr>
                        <th scope="col">Id Estudiante</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Semestre</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estudiantesFiltrados.map((estudiante) => (
                        <tr key={estudiante.id}>
                            <td>{estudiante.id}</td>
                            <td>{estudiante.nombre}</td>
                            <td>{estudiante.semestre}</td>
                            <td>
                                <button
                                    className="btn btn-info me-2"
                                    onClick={() => editarEstudiante(estudiante)}
                                >
                                    Editar
                                </button>                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}