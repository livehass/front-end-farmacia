import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-neutral-50 flex justify-center">
          <div className='container grid grid-cols-2 text-blue-500'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Seja bem vindo!</h2>
              <p className='text-xl'>Encontre os melhores preços de medicamentos aqui!</p>
                <img src="/src/assets/img/home.png" alt=""/>  
              <div className="flex justify-around gap-4">              
                <button className='cursor-pointer hover:bg-red-500 rounded bg-stone-400 text-white py-2 px-4'>Ver Produtos</button>
              </div>
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;