
import { Header } from '@/components/Header'


export default function MainHeader() {
    return <>
        <div className='z-40 backdrop-blur bg-GREY fixed left-0 right-0'>
            <Header condensed />
        </div>
    </>
}
