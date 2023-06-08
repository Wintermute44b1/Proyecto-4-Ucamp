import React from 'react';
import './estilos.css'
import { useState, useEffect } from 'react';
import { FirebaseApp } from 'firebase/app';
import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from 'firebase/firestore';

const reservacionInitial = () => {
  return {
    horario: "",
    mesa: "",
  };
};

const ReservacionPage = () => {
  const [form, setForm] = useState(reservacionInitial());
  const [reservaciones, setReservaciones] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevaReservacion = {
      horario: form.horario,
      mesa: form.mesa,
    };

    await addDoc(collection(db, 'reservaciones'), nuevaReservacion);
    await obtenerReservaciones();

    setForm(reservacionInitial());
  };

  const obtenerReservaciones = async () => {
    const resp = await getDocs(collection(db, 'reservaciones'));
    const reservaciones = resp.docs.map((reservacion) => ({
      id: reservacion.id,
      ...reservacion.data(),
    }));
    setReservaciones(reservaciones);
  };

  const borrarReservacion = (id) => {
    eliminarReservacion(id);
  };

  const eliminarReservacion = async (id) => {
    const coleccion = doc(db, 'reservaciones', id);
    await deleteDoc(coleccion);
    await obtenerReservaciones();
  };

  return (
    <>
      <h1 className='titulo'>Reservaciones</h1>
      <div className='textbox'>Por favor elige la fecha y mesa para tu proxima visita. Apurate! El Restaurante se llena rapido.
      Si te equivocas puedes borrar y volver a escoger un horario.</div>
      <ul>
        {reservaciones.map((reservacion, i) => (
          <li key={reservacion.id}>
            <h2>{reservacion.horario}</h2>
            <p>Mesa: {reservacion.mesa}</p>
            <button onClick={() => borrarReservacion(i)}>Borrar</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="horario"
          placeholder="Horario"
          required
        />
        <input
          type="text"
          name="mesa"
          placeholder="Mesa"
          required
        />
        <button type="button" className='btn btn-success'>Crear</button>
      </form>
    </>
  );
};
export default ContactUs