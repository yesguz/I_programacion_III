import Link from "next/link";

// Definimos la interfaz para las props de la página
interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Ejercicio1ResultPage({ searchParams }: PageProps) {
    // En Next.js 15+, searchParams es una promesa
    const params = await searchParams;
    const animal = params.animal;

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Resultado</h1>

            <div className="glass-panel" style={{ display: 'inline-block', minWidth: '300px' }}>
                <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Tu animal favorito es:</p>
                <p style={{ fontSize: '3rem', margin: '1rem 0', fontWeight: 'bold', color: '#facc15' }}>
                    {animal || 'Desconocido'}
                </p>
            </div>

            <div style={{ marginTop: '3rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                <Link href="/ejercicio1" className="btn" style={{ background: 'transparent', border: '1px solid var(--primary)' }}>
                    Probar otro
                </Link>
                <Link href="/" className="btn">
                    Ir al Inicio
                </Link>
            </div>
        </div>
    );
}
