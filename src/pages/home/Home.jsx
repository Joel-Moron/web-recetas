import { useEffect, useState } from 'react';
import { categorias } from '../../assets/categorias';
import { fiveStart } from '../../assets/fiveStart';
import Carrusel from './components/Carrusel';
import Categories from './components/Categories';
import MasBuscado from './components/MasBuscado';


const Home = () => {
    const fiveStartItems = fiveStart



    return (
        <div className="flex flex-col gap-7 w-full py-8">
            <MasBuscado />
            <Categories categorias={categorias} />
            <div className='flex flex-col'>
                <h2 className='text-center text-[20px] font-normal'>Recetas calificadas con 5 estrellas</h2>
                <Carrusel classNameButton='bg-[#C7C7C7] border-none text-black w-[32px] h-[32px] p-0 rounded-full' items={fiveStartItems} />
            </div>
            <div className='flex flex-col'>
                <h2 className='text-center text-[20px] font-normal'>Recetas para San Valentín</h2>
                <Carrusel classNameButton='bg-[#C7C7C7] border-none text-black w-[32px] h-[32px] p-0 rounded-full' items={fiveStartItems} />
            </div>
        </div>
    )
}

export default Home;