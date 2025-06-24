
export default function WeatherState() {
    return (
        <div className="p-2 w-52 flex justify-between text-center absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-300/50 backdrop-blur-3xl rounded-4xl ">
            <span className="cursor-pointer bg-white w-6 h-6 rounded-full font-bold hover:bg-gray-300 transition-all duration-150">&lt;</span>
            <div className="ralative w-2/3 flex justify-center items-center">
                <span className="item absolute">Rain</span>
            </div>
            <span className="cursor-pointer bg-white w-6 h-6 rounded-full font-bold hover:bg-gray-300 transition-all duration-150">&gt;</span>
        </div>
    )
}
