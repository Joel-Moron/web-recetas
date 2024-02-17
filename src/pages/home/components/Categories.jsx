import { Button } from 'primereact/button';
import { useEffect, useState } from 'react';


const Categories = ({ categorias = [] }) => {
    const [listCategories, setListCategories] = useState(categorias)
    const [buttonPlus, setButtonPlus] = useState(false)

    console.log(categorias)

    const handleResize = () => {
        if (window.innerWidth < 780 && window.innerWidth > 594) {
            console.log(listCategories.filter((category, index) => index !== 3))
            setListCategories(listCategories.filter((category, index) => index !== 3))
        } else if (window.innerWidth < 595 && window.innerWidth > 393) {
            setListCategories(listCategories.filter((category, index) => index !== 3 && index !== 2))
        } else if (window.innerWidth < 394) {
            setListCategories(listCategories.filter((category, index) => index === 0))
        } else {
            setListCategories(categorias)
        }
        if (window.innerWidth < 393) {
            setButtonPlus(true)
        } else {
            setButtonPlus(false)
        }
    };

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className='flex flex-col items-center'>
            <h2 className=" text-[20px] font-normal text-center text-black">Si tienes Hambre come a tu gusto</h2>
            <div className='flex px-5 gap-5 flex-wrap justify-center sm:justify-between w-full max-w-[958px]'>
                {listCategories.map(categoria => (
                    <div key={categoria.tittle} className='flex flex-col w-[167px] h-[190px]'>
                        <img className='box-border w-full flex-1 h-[129px] border-b-0 border-[1px] border-solid' src={categoria.img} alt={categoria.tittle} />
                        <span className='box-border h-[38px] w-full bg-[#D9D9D9] text-black flex justify-center items-center border-[1px] border-solid '>{categoria.tittle}</span>
                    </div>
                ))}
            </div>
            {buttonPlus && <Button className='mt-3'>ver mas categorias</Button>}
        </div>
    )
}

export default Categories;