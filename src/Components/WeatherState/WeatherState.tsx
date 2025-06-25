import Slider from "./Components/Slider";

const WeahterStates = ["Clear", "Few Clouds", "Scattered Clouds", "Broken Clouds", "Shower Rain", "Rain", "Thunderstorm", "Snow", "Mist"];

export default function WeatherState() {
    return (
        <div className="p-2 w-62 flex justify-between text-center absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-300/50 backdrop-blur-3xl rounded-4xl ">
            <Slider slides={WeahterStates}/>
        </div>
    )
}
