

const HeroSection = () => {
    return (
        <div className="w-full h-screen grid grid-cols-2 bg-[#FFD79B] text-[#373737]">
            <div className="w-full h-full flex flex-col justify-center items-center gap-y-8">
                <div className="flex flex-col gap-y-3">
                    <h4 className="text-5xl font-black">Business Name</h4>
                    <p className=" font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p className="font-normal -mt-3">Quisque nisl eros, pulvinar facilisis justo mollis</p>
                    <a
                        href="https://forms.gle/isHEjDkVZd9zS2VeA"
                        target="_blank"
                        rel="noopener" 
                        className="self-start text-center bg-blue-600 hover:bg-blue-500 text-white w-48 py-2 rounded-3xl font-medium tracking-wider mt-5"
                    >Register Now</a>
                </div>
            </div>
            <div className="w-full h-full flex flex-col gap-y-8">
                <img 
                    src="/images/hero.png" 
                    className=" scale-75"
                />
            </div>
        </div>
    )
}

export default HeroSection