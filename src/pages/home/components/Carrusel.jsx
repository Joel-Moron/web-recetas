import { Button } from "primereact/button";
import { Carousel } from 'primereact/carousel';

const Carrusel = ({ className = '', items, classNameButton = '' }) => {

    const responsiveOptions = [
        {
            breakpoint: '2000px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '450px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (item) => {
        return (
            <div className="flex flex-col w-[200px] h-[280px]">
                <img className="w-full flex-1 object-cover rounded-t-lg" src={item.img} alt={item.name} />
                <p className="bg-[#D9D9D9] w-full h-[67px] grid place-items-center rounded-b-lg">{item.name}</p>
            </div>
        );
    };

    console.log(items)
    return (
        <div className={'flex items-center gap-5 ' + className}>
            <Carousel value={items} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="w-full carousel-justify-center hidden-indicators" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}

export default Carrusel;