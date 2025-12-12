import Link from "next/link";
import { submitAnimal } from "./action";

export default function Ejercicio1Page() {
    return (
        <div className="glass-panel" style={{ maxWidth: '500px', margin: '0 auto' }}>
            <h1>Tu Animal Favorito</h1>
            <p style={{ marginBottom: '1.5rem' }}>
                Este formulario utiliza <strong>Server Actions</strong> de Next.js para interceptar el envío y redirigir.
            </p>

            {/* El atributo action acepta la función del servidor directamente */}
            <form action={submitAnimal}>
                <label htmlFor="nombreAnimal" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    Nombre del Animal:
                </label>
                <input
                    type="text"
                    id="nombreAnimal"
                    name="nombreAnimal"
                    placeholder="Ej. León, Águila..."
                    required
                />

                <button type="submit" className="btn" style={{ width: '100%' }}>
                    Enviar Datos
                </button>
            </form>

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link href="/" style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
                    &larr; Volver al Inicio
                </Link>
            </div>
        </div>
    );
}
