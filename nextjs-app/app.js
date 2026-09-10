function App() {
  const caracteristicas = [
    {
      titulo: "App Router →",
      descripcion: "Enrutamiento simplificado y arquitectura moderna basada en Server Components."
    },
    {
      titulo: "Optimización →",
      descripcion: "Carga veloz con renderizado híbrido y gestión eficiente de recursos."
    }
  ];

  return (
    <div className="next-container">
      <span className="badge">Next.js 14 Framework</span>
      <h1 className="title">Proyecto Integrador M4</h1>
      <p className="description">
        Implementación de arquitectura Next.js y despliegue modular para Silicon Misiones.
      </p>

      <div className="feature-grid">
        {caracteristicas.map((item, index) => (
          <div key={index} className="feature-card">
            <h3>{item.titulo}</h3>
            <p>{item.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);