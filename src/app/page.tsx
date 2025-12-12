import Link from "next/link";

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Evaluación Práctica 1</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#cbd5e1' }}>
        Seleccione un ejercicio para continuar:
      </p>

      <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="/ejercicio1" className="glass-panel" style={{ textDecoration: 'none', width: '300px', transition: 'transform 0.3s' }}>
          <h2>🐶 Ejercicio 1</h2>
          <p>Interceptar Animal Favorito</p>
          <div style={{ marginTop: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>Ir ahora &rarr;</div>
        </Link>

        <Link href="/ejercicio2" className="glass-panel" style={{ textDecoration: 'none', width: '300px', transition: 'transform 0.3s' }}>
          <h2>🎬 Ejercicio 2</h2>
          <p>Listado de Enums (Películas)</p>
          <div style={{ marginTop: '1rem', color: 'var(--secondary)', fontWeight: 'bold' }}>Ir ahora &rarr;</div>
        </Link>
      </div>
    </div>
  );
}
