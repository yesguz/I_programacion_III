'use server'

import { redirect } from 'next/navigation'

export async function submitAnimal(formData: FormData) {
    const animal = formData.get('nombreAnimal')

    if (animal) {
        // Redirigimos a la página de resultados pasando el dato en la URL
        redirect(`/ejercicio1/result?animal=${encodeURIComponent(animal.toString())}`)
    }
}
