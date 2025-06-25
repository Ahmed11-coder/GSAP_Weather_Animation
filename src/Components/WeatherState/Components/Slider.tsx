import { useState } from "react";

export default function Slider(props: {slides: string[]}) {
    const [active, setActive] = useState<number>(0);
    const nextItem = () => {
        if (active === props.slides.length - 1) setActive(0);
        else setActive((active + 1));
    }

    const previousItem = () => {
        if (active === 0) setActive(props.slides.length - 1);
        else setActive(active - 1);
    }

    return (
        <>
            <span className="cursor-pointer bg-white w-6 h-6 rounded-full font-bold hover:bg-gray-300 transition-all duration-150" onClick={() => previousItem()}>&lt;</span>
            <div className="relative w-[70%] flex items-center overflow-hidden">
                <div className="relative w-full  flex justify-center items-center transition-all duration-400" style={{transform: `translateX(-${active*200}px)`}}>
                    {
                        props.slides.map((content, index) => (
                            <span key={index} className={`item absolute`} style={{transform:` translateX(${index*200}px)`}}>{content}</span>
                        ))
                    }
                </div>
            </div>
            <span className="cursor-pointer bg-white w-6 h-6 rounded-full font-bold hover:bg-gray-300 transition-all duration-150" onClick={() => nextItem()}>&gt;</span>
        </>
    )
}
