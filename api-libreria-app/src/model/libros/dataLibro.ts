
// traer datos de la api
export async function getLibros() {
    try {
        const res = await fetch('http://127.0.0.1:3001/libros/', { cache: 'no-store' })
        // const res = await fetch('http://109.199.101.28:3001/libros/', { cache: 'no-store' })
        return res.json()
    } catch (error) {
        throw new Error('fallo al traer los libros de la api')
    }
}