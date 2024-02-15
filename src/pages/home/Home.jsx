import { categorias } from '../../assets/categorias';
import { fiveStart } from '../../assets/fiveStart';
import Carrusel from './components/Carrusel';


const Home = () => {
    const fiveStartItems = fiveStart
    console.log(fiveStartItems)

    return (
        <div className="w-full py-8">
            <div className="carrusel w-full h-[225px] bg-[#6AE84A]/[34%] rounded-md">

            </div>
            <div className='flex flex-col items-center'>
                <h2 className=" text-[20px] font-normal text-center text-black">Si tienes Hambre come a tu gusto</h2>
                <div className='flex justify-between w-[958px] h-[190px]'>
                    {categorias.map(categoria => (
                        <div key={categoria.tittle} className='flex flex-col w-[167px] h-[190px]'>
                            <img className='box-border w-full flex-1 h-[129px] border-b-0 border-[1px] border-solid' src={categoria.img} alt={categoria.tittle} />
                            <span className='box-border h-[38px] w-full bg-[#D9D9D9] text-black flex justify-center items-center border-[1px] border-solid '>{categoria.tittle}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-center text-[20px] font-normal'>Recomendaciones calificadas con 5 estrellas</h2>
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