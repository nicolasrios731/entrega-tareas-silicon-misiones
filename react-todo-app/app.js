const { useState } = React;

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (!nuevaTarea.trim()) return;

    const objetoTarea = {
      id: Date.now(),
      texto: nuevaTarea.trim(),
      completada: false
    };

    setTareas([...tareas, objetoTarea]);
    setNuevaTarea("");
  };

  const alternarEstado = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Gestor de Tareas</h1>
        <p>Proyecto Integrador M3 - React</p>
      </header>

      <form onSubmit={agregarTarea} className="task-form">
        <input
          type="text"
          className="task-input"
          placeholder="Escribí una nueva tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button type="submit" className="btn-add">
          Agregar
        </button>
      </form>

      <ul className="task-list">
        {tareas.length === 0 ? (
          <li className="empty-state">No hay tareas pendientes.</li>
        ) : (
          tareas.map((tarea) => (
            <li key={tarea.id} className="task-item">
              <div
                className="task-content"
                onClick={() => alternarEstado(tarea.id)}
              >
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => {}}
                />
                <span
                  className={`task-text ${
                    tarea.completada ? "completed" : ""
                  }`}
                >
                  {tarea.texto}
                </span>
              </div>
              <button
                onClick={() => eliminarTarea(tarea.id)}
                className="btn-delete"
                title="Eliminar tarea"
              >
                ✕
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);