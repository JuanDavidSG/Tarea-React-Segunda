import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [estudianteEditar, setEstudianteEditar] = useState(null);

    const agregarEstudiante = (estudiante) => {
        const existeEstudiante = estudiantes.some((element) => element.id === estudiante.id);
        if (existeEstudiante) {
            window.alert("¡El estudiante con este ID ya existe!");
        } else {
            setEstudiantes([...estudiantes, estudiante]);
        }
    }

    const editarEstudiante = (estudiante) => {
        setEstudianteEditar(estudiante);
    }


    const actualizarEstudiante = (estudiante) => {
        const indice = estudiantes.findIndex((est) => est.id === estudiante.id);
        const nuevosEstudiantes = [...estudiantes];
        nuevosEstudiantes[indice] = estudiante;
        setEstudiantes(nuevosEstudiantes);
        console.log(nuevosEstudiantes)
        setEstudianteEditar(null);
    };

    return (
        <>
            <FormularioEstudiante agregar={agregarEstudiante} estudianteEditar={estudianteEditar}
                actualizarEstudiante={actualizarEstudiante} />
            <TablaEstudiante listaEstudiantes={estudiantes} editarEstudiante={editarEstudiante} />
        </>
    )
}