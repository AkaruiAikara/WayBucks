import jumbotronimg from '../../assets/img/jumbotron-img.png';
import slice from '../../assets/img/slice.png';

export default function Jumbotron() {
    return (
        <div className="container mx-auto">
            <div className="relative flex flex-column lg:flex-row items-center px-8 lg:pl-20 lg:pr-80 py-20 lg:mr-48 bg-blood text-white rounded-lg">
                <img className="absolute z-10 top-0 -left-24" src={slice} alt="slice" />
                <img className="absolute z-10 right-0 md:right-48 top-0" src={slice} alt="slice" />
                <img className="absolute z-10 -bottom-8 -right-24" src={slice} alt="slice" />
                <img className="absolute z-10 rotate-90 -bottom-16 left-1/3" src={slice} alt="slice" />
                <div className="space-y-12 lg:pr-72">
                    <h1 className="text-6xl font-bold font-noto">WAYBUCKS</h1>
                    <h3 className="text-3xl">Things are changing, but we’re still here for you</h3>
                    <p className="text-xl">We have temporarily closed our in-store cafes, but select grocery and drive-thru locations remaining open. Waysbucks Drivers is also available</p>
                    <p className="text-xl mt-5">Let's Order...</p>
                </div>
                <img className="absolute z-20 w-3/4 -bottom-72 md:-bottom-3/4 right-0 left-0 mx-auto lg:bottom-auto lg:left-auto lg:-right-44 lg:w-2/5" src={jumbotronimg} alt="jumbotron" />
            </div>
        </div>
    )
}