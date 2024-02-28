import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CartaoCategoria from "../cartaoCategoria/CartaoCategoria";
import { Plus } from "@phosphor-icons/react";
import { toastAlerta } from "../../../util/toastAlerta";
import { Link } from "react-router-dom";
import { Vortex } from "react-loader-spinner";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
        try{
            await buscar('/categorias', setCategorias);
        } catch{
            toastAlerta('Ocorreu um erro ao buscar as categorias.', 'erro');
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, [categorias.length]);

    return (
        <>
           <div className='flex justify-center ...'>
      {categorias.length === 0 && (
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
            <div className="flex justify-center w-full py-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <>
                                <CartaoCategoria key={categoria.id} categoria={categoria} />
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;