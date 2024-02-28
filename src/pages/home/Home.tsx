import { useNavigate } from "react-router-dom";
import ListaProdutos from "../../components/produtos/listaProdutos/ListaProdutos"

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <div className="bg-white flex justify-center aspect-auto">
        <div className='container grid grid-cols-2 dark:bg-'>
          <div className="flex flex-col gap-2 items-center justify-center py-4">
            <h2 className='text-7xl font-bold'>Farmacia do jorjão</h2>
            <p className='text-3xl m-5'>parte do Front-end da farmacia do jorjão</p>

            

            <div className="flex justify-around gap-4">
              
              <button className='rounded bg-blue-500 hover:bg-blue-900 text-white py-2 px-4' onClick={() => navigate('/produtos')}>Ver produtos</button>
              
              <button className='rounded px-4 bg-blue-500 hover:bg-blue-800' onClick={() => navigate('/cadastroProduto')}>Novo Produto</button>
            </div>
          </div>
          <img src="https://raw.githubusercontent.com/livehass/front-end-farmacia/main/src/assets/pills.svg" alt="Farmácia" />
        </div>
      </div>

      <ListaProdutos />
    </>
  )
}

export default Home