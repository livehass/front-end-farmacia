import { useEffect, useState } from "react";
import Produto from "../../../models/Produto";
import { buscar } from "../../../services/Service";
import { toastAlerta } from "../../../util/toastAlerta";
import { Vortex} from "react-loader-spinner";
import CartaoProduto from "../cartaoProduto/CartaoProduto";
import { Link } from "react-router-dom";
import { Plus } from "@phosphor-icons/react";

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        try {
            await buscar('/produtos', setProdutos);
        } catch (error: any) {
            toastAlerta('Ocorreu um erro ao buscar por produtos.', 'erro')
        }
    }

    useEffect(() => {
        buscarProdutos();
    }, [produtos.length]);
    return (
        <>  

<div className='flex justify-center ...'>
            {produtos.length === 0 && (
                <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={['white', 'blue', 'white', 'blue', 'white', 'blue']}
        
                />
            )}
            </div>
            <div className='container mx-auto py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {produtos.map((produto) => (
                    <CartaoProduto key={produto.id} produto={produto} />
                ))}

               
            </div>
        </>
    );
}

export default ListaProdutos;