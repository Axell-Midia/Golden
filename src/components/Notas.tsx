import { useEffect, useState } from "react";

type Nota = {
  id: number;
  titulo: string;
  descripcion: string;
};

const Notas = () => {
  const [notas, setNotas] = useState<Nota[]>([]);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [editandoId, setEditandoId] = useState<number | null>(null);

  // Obtener notas
  const fetchNotas = async () => {
    const response = await fetch("http://localhost:8080/api/notas");
    const data = await response.json();
    setNotas(data);
  };

  // Cargar notas
  useEffect(() => {
    fetch("http://localhost:8080/api/notas")
      .then((response) => response.json())
      .then((data) => setNotas(data))
      .catch((error) => console.error(error));
  }, []);

  // Crear o editar
  const crearNota = async () => {
    if (!titulo || !descripcion) {
      alert("Completa los campos");
      return;
    }

    if (editandoId !== null) {
      await fetch(`http://localhost:8080/api/notas/${editandoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          descripcion,
        }),
      });

      setEditandoId(null);
    } else {
      await fetch("http://localhost:8080/api/notas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          descripcion,
        }),
      });
    }

    setTitulo("");
    setDescripcion("");

    fetchNotas();
  };

  // Eliminar
  const eliminarNota = async (id: number) => {
    await fetch(`http://localhost:8080/api/notas/${id}`, {
      method: "DELETE",
    });
    fetchNotas();
  };

  // Editar
  const editarNota = (nota: Nota) => {
    setTitulo(nota.titulo);
    setDescripcion(nota.descripcion);
    setEditandoId(nota.id);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <button onClick={crearNota}>
          {editandoId !== null ? "Guardar Cambios" : "Crear Nota"}
        </button>
      </div>

      <div>
        {notas.map((nota) => (
          <div key={nota.id}>
            <h3>{nota.titulo}</h3>

            <p>{nota.descripcion}</p>

            <button onClick={() => editarNota(nota)}>Editar</button>

            <button onClick={() => eliminarNota(nota.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notas;
