import { Button } from "primereact/button";

const Carrusel = ({ className = '', items, classNameButton = '' }) => {

    console.log(items)
    return (
        <div className={'flex items-center gap-5 ' + className}>
            <Button className={"h-fit " + classNameButton} label="<" />
            <div className="flex-1 flex justify-between h-full">
                {
                    items?.map(item => (
                        <div className="flex flex-col h-[280px] w-[200px]" key={item.name}>
                            <img className='box-border w-full h-[213px] rounded-t-xl object-cover' src={item.img} alt={item.name} />
                            <span className='box-border flex-1 w-full bg-[#D9D9D9] flex justify-center items-center rounded-b-xl'>{item.name}</span>
                        </div>
                    ))
                }
            </div>
            <Button className={"h-fit " + classNameButton} label=">" />
        </div>
    )
}

export default Carrusel;