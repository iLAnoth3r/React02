import "./Formulario.css";
import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Imagenes from "../SocialButton/SocialButton";

function Formulario() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [clave, setClave] = useState("");
  const [sclave, setSclave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [error, setError] = useState(false);

  const validarDatos = (e) => {
    e.preventDefault();

    if (clave != sclave) {
      setError(true);
      return;
    }
    setError(false);
  };

  const [errorMail, setErrorMail] = useState(false);

  const validar = (e) => {
    e.preventDefault();

    const caracter = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!caracter.test(mail)) {
      setErrorMail(true);
      return;
    }
    setErrorMail(false);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="body">
        <Card.Title className="titulo">Crea una cuenta</Card.Title>

        <form onSubmit={(e) => handleSubmit(e)}>
          {error ? <p>Contraseñas no coinciden</p> : null}
          {errorMail ? <p>Email no válido</p> : null}
          <input
            placeholder="Ingresa tu nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="nombre"
          ></input>
          <input
            placeholder="Ingresa tu email"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            name="email"
          ></input>
          <input
            placeholder="Ingresa tu contraseña"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            name="pass"
          ></input>
          <input
            placeholder="Repite tu contraseña"
            value={sclave}
            onChange={(e) => setSclave(e.target.value)}
            name="passConfirm"
          ></input>
        </form>
        <Button
          className="boton"
          variant="success"
          onClick={(e) => {
            validarDatos(e);
            validar(e);
          }}
          type="submit"
        >
          Registrarse
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Formulario;
