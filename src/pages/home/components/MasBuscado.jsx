import { Carousel } from "primereact/carousel";
import { masbuscado } from '../../../assets/masbuscado';
import { Button } from "primereact/button";

const MasBuscado = () => {


    const responsiveOptions = [
        {
            breakpoint: '2000px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const productTemplate = (item) => {
        return (
            <div className="w-full flex items-center justify-between">
                <img className="max-w-[300px] h-[166px]" src={item.img} alt={item.name} />
                <p className=" max-w-[470px]">{item.text}</p>
                <Button className=" w-[84px] h-[35px] p-0 " label="Ver mas" />
            </div>
        );
    };


    return (
        <div className="flex flex-col justify-center carrusel w-full h-[270px] bg-[#6AE84A]/[34%] rounded-md px-5 py-3">
            <h3 className="text-center m-0">Lo Más Buscado</h3>
            <Carousel value={masbuscado} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="w-full hidden-indicators" circular
                autoplayInterval={3000} itemTemplate={productTemplate} />
        </div>
    )
}

export default MasBuscado;