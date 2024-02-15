import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';


const Header = () => {

    return (
        <header className="w-full h-16 bg-[#4B810D] flex justify-center">
            <div className="w-full max-w-[1172px] flex justify-between items-center">
                <span >LOGONAME</span>
                <form className="p-input-icon-left">
                    <i className="pi pi-search" />
                    <InputText className=" rounded-full h-8 w-96 border-black" placeholder="Buscar" />
                </form>
                <div className="flex gap-5 items-center text-black">
                    <Button className="rounded-md bg-[#FFBE41] h-7 w-32 shadow-xl border-none text-black" label="Ingresar" />
                    <i className='pi pi-user text-2xl' />
                </div>
            </div>
        </header>
    )
}

export default Header;