
import Banner from "./banner";
import { Header } from "./header";




export default function MainHeader() {
    return <>
        <div className='z-40 backdrop-blur bg-GREY fixed left-0 right-0'>
            <Header condensed />
        </div>
        <Banner/>
    </>
}
