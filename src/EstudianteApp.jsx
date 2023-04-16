import { useState } from "react"
import { FormularioEstudiante } from "./componentes/FormularioEstudiante";
import { TablaEstudiante } from "./componentes/TablaEstudiante";



export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);
    const [estudianteEditar, setEstudianteEditar] = useState(null);

    const agregarEstudiante = (estudiante) => {
        const existeEstudiante = estudiantes.some((element) => element.id === estudiante.id);
        if (existeEstudiante) {
            window.alert("¡Según su ID este estudiante ya existe!");
        } else {
            setEstudiantes([...estudiantes, estudiante]);
        }
    }

    return (
        <>
            <FormularioEstudiante agregar={(estu) => { agregarEstudiante(estu) }} />
            <TablaEstudiante listaEstudiantes={estudiantes} />
        </>
    )
}