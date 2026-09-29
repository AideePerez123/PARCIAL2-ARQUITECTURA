import { useState } from 'react';
import type { Alumno } from './types';
import './App.css';

function App() {
  const [alumnos] = useState<Alumno[]>([
    { id: 1, nombre: 'Carlos Pérez', edad: 20, carrera: 'Ingeniería de Software' },
    { id: 2, nombre: 'María Gómez', edad: 22, carrera: 'Redes y Seguridad' },
    { id: 3, nombre: 'Juan López', edad: 21, carrera: 'Desarrollo Web' },
  ]);

  return (
    <div className="container">
      <h1>Listado de Alumnos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Carrera</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <tr key={alumno.id}>
              <td>{alumno.id}</td>
              <td>{alumno.nombre}</td>
              <td>{alumno.edad}</td>
              <td>{alumno.carrera}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;