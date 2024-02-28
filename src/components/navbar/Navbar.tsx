import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <>
            <div className='w-full bg-gradient-to-r from-red-900 to-blue-600 text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold mx-10'>Projeto Farmácia - Farmácia do Jorjão</Link>

                    <div className='flex gap-5 mx-5'>
                        <Link to='/home' className='hover:underline text-white'>Início</Link>
                        <Link to='/produtos' className='hover:underline text-white'>Produtos</Link>
                        <Link to='/categorias' className='hover:underline text-white'>Categorias</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar