import React from 'react'

const ServiceSection = () => {
    return (
        <div className="w-full h-auto grid grid-cols-2 content-start text-white">
            <div className="w-full flex flex-col justify-center items-center gap-y-5 bg-brown1">
                <div className="flex flex-col gap-y-5">
                    <h4 className="text-3xl font-black tracking-wider ">Our Service</h4>
                    <div className="flex flex-col">
                        <p>Lorem ipsum dolor sit amet. Qui quia dicta rem rerum molestias est Quis</p>
                        <p>quidem quo galisum consequatur aut obcaecati voluptatem. Ut fuga</p>
                        <p> necessitatibus id voluptate minus qui veritatis vitae et quam</p>
                        <p className="">dignissimos qui mollitia quidem et facere tempore ut officia</p>
                    </div>
                    <a 
                        href="https://forms.gle/isHEjDkVZd9zS2VeA"
                        target="_blank"
                        rel="noopener"
                        className="text-center border border-white bg-transaparent text-white hover:bg-white hover:text-brown1 font-medium w-48 py-2 rounded-3xl tracking-wider mt-3"
                    >Register Now</a>
                </div>
            </div>
            <div className="max-w-full h-auto overflow-hidden">
                <img 
                    src="/images/service.jpg"
                    // className="w-[2700px] h-[1800px]" 
                />
            </div>
        </div>
    )
}

export default ServiceSection