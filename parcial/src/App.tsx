import React, { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import type { Alumno } from './types';
import './App.css';

function App() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([
    { id: 1, nombre: 'Carlos Pérez', edad: 20, carrera: 'Ingeniería de Software' },
    { id: 2, nombre: 'María Gómez', edad: 22, carrera: 'Redes y Seguridad' },
    { id: 3, nombre: 'Juan López', edad: 21, carrera: 'Desarrollo Web' },
  ]);

  const [nombre, setNombre] = useState<string>('');
  const [edad, setEdad] = useState<string>('');
  const [carrera, setCarrera] = useState<string>('');
  const [busqueda, setBusqueda] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nombre.trim() || !edad || !carrera.trim()) return;

    const nuevoAlumno: Alumno = {
      id: alumnos.length > 0 ? alumnos[alumnos.length - 1].id + 1 : 1,
      nombre,
      edad: Number(edad),
      carrera,
    };

    setAlumnos([...alumnos, nuevoAlumno]);
    setNombre('');
    setEdad('');
    setCarrera('');
  };

  // Filtrado de alumnos por nombre
  const alumnosFiltrados = alumnos.filter((alumno) =>
    alumno.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Listado de Alumnos</h1>

      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar alumno por nombre..."
          value={busqueda}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setBusqueda(e.target.value)}
        />
      </div>

      <form onSubmit={handleSubmit} className="form-alumno">
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setNombre(e.target.value)}
        />
        <input
          type="number"
          placeholder="Edad"
          value={edad}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEdad(e.target.value)}
        />
        <input
          type="text"
          placeholder="Carrera"
          value={carrera}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCarrera(e.target.value)}
        />
        <button type="submit">Agregar Alumno</button>
      </form>

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
          {alumnosFiltrados.length > 0 ? (
            alumnosFiltrados.map((alumno) => (
              <tr key={alumno.id}>
                <td>{alumno.id}</td>
                <td>{alumno.nombre}</td>
                <td>{alumno.edad}</td>
                <td>{alumno.carrera}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: 'center', color: '#888' }}>
                No se encontraron alumnos.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;