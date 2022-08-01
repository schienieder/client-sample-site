import React from 'react'

const AboutSection = () => {
    return (
        <div className="w-full h-screen grid grid-cols-2 place-items-center text-brown1">
            <img 
                src="/images/about.png"
                className="scale-[.7]"
            />
            <div className="flex flex-col gap-y-5">
                <h4 className="text-3xl font-black tracking-wider">About Our Farm</h4>
                <div className="flex flex-col">
                    <p>Lorem ipsum dolor sit amet. Qui quia dicta rem rerum molestias est Quis</p>
                    <p>quidem quo galisum consequatur aut obcaecati voluptatem. Ut fuga</p>
                    <p> necessitatibus id voluptate minus qui veritatis vitae et quam</p>
                    <p className="">dignissimos qui mollitia quidem et facere tempore ut officia</p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection