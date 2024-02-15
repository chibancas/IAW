
// traer datos de la api
export async function getLibros() {
    try {
        const res = await fetch('http://localhost:3001/libros/', { cache: 'no-store' })
        return res.json()
    } catch (error) {
        throw new Error('fallo al traer los libros de la api')
    }
}