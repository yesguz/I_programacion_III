import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Evaluación Práctica 1</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#555' }}>
        Seleccione un ejercicio para continuar:
      </p>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/ejercicio1" className="glass-panel" style={{ textDecoration: 'none', width: '300px', textAlign: 'left' }}>
          <h2>🐶 Ejercicio 1</h2>
          <p style={{ color: '#666' }}>Interceptar Animal Favorito</p>
          <div style={{ marginTop: '1rem', color: '#0070f3', fontSize: '0.9rem' }}>Ir ahora &rarr;</div>
        </Link>

        <Link href="/ejercicio2" className="glass-panel" style={{ textDecoration: 'none', width: '300px', textAlign: 'left' }}>
          <h2>🎬 Ejercicio 2</h2>
          <p style={{ color: '#666' }}>Listado de Enums (Películas)</p>
          <div style={{ marginTop: '1rem', color: '#0070f3', fontSize: '0.9rem' }}>Ir ahora &rarr;</div>
        </Link>
      </div>
    </div>
  );
}
