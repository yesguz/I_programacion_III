import Link from "next/link";
import { GeneroPelicula, PaisPelicula } from "@/types/enums";

export default function Ejercicio2Page() {
    // Convertimos los Enums a arrays para poder iterar sobre ellos
    const generos = Object.values(GeneroPelicula);
    const paises = Object.values(PaisPelicula);

    return (
        <div>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1>Catálogo de Películas</h1>
                <p style={{ color: '#94a3b8' }}>Datos tipados con <strong>TypeScript Enums</strong></p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* Tarjeta de Géneros */}
                <div className="glass-panel">
                    <h2 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                        🎬 Géneros
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {generos.map((genero, index) => (
                            <li key={index} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#e2e8f0' }}>
                                {genero}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Tarjeta de Países */}
                <div className="glass-panel">
                    <h2 style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                        🌍 Países
                    </h2>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {paises.map((pais, index) => (
                            <li key={index} style={{ padding: '0.8rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: '#e2e8f0' }}>
                                {pais}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <Link href="/" className="btn">
                    &larr; Volver al Menú Principal
                </Link>
            </div>
        </div>
    );
}
