
export default function Settings() {
    return (
        <div className="p-4 pl-8 w-56 h-56 absolute top-1/2 -translate-y-1/2 bg-gray-300/25 backdrop-blur-3xl rounded-4xl">
            <h3 className="text-xl text-stone-300 my-2">Settings:</h3>
            <form className="space-y-2 text-[14px]">
                <div>
                    <input type="radio" name="status" id="clear" />
                    <label htmlFor="clear">Clear</label>
                </div>

                <div>
                    <input type="radio" name="status" id="rain" />
                    <label htmlFor="rain">Rain</label>
                </div>

                <div>
                    <input type="radio" name="status" id="snow" />
                    <label htmlFor="snow">Snow</label>
                </div>

                <div>
                    <input type="radio" name="status" id="cloudy" />
                    <label htmlFor="cloudy">Cloudy</label>
                </div>

                <div>
                    <input type="radio" name="status" id="thunderstorm" />
                    <label htmlFor="thunderstorm">Thunder Storm</label>
                </div>
            </form>
        </div>
    )
}
