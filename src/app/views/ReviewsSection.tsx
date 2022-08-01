import React from 'react'

const ReviewsSection = () => {
    return (
        <div className="w-full h-96 flex flex-col items-center gap-y-5 text-brown1 bg-[#F2D7A5]">
            <h4 className="text-3xl font-black tracking-wider -mt-28">Our Reviews</h4>
            <div className="grid grid-cols-3 gap-x-10">
                {/*  */}
                <div className="w-80 h-auto flex flex-col">
                    <div className="flex flex-col justify-center items-center py-8 bg-[#FFC785]">
                        <h4 className="text-xl font-bold tracking-wider">Person 1</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-8 gap-y-5">
                        Lorem ipsum dolor sit amet. Qui quia dicta rem rerum molestias est Quis quidem quo galisum consequatur aut obcaecati voluptatem.
                        <div className="self-start flex gap-x-3">
                            <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-sm">Customer Name</h4>
                                <p className="text-xs">Position/Occupation</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="w-80 h-auto flex flex-col">
                    <div className="flex flex-col justify-center items-center py-8 bg-[#FFC785]">
                        <h4 className="text-xl font-bold tracking-wider">Person 2</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-8 gap-y-5">
                        Lorem ipsum dolor sit amet. Qui quia dicta rem rerum molestias est Quis quidem quo galisum consequatur aut obcaecati voluptatem.
                        <div className="self-start flex gap-x-3">
                            <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-sm">Customer Name</h4>
                                <p className="text-xs">Position/Occupation</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className="w-80 h-auto flex flex-col">
                    <div className="flex flex-col justify-center items-center py-8 bg-[#FFC785]">
                        <h4 className="text-xl font-bold tracking-wider">Person 3</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-8 gap-y-5">
                        Lorem ipsum dolor sit amet. Qui quia dicta rem rerum molestias est Quis quidem quo galisum consequatur aut obcaecati voluptatem.
                        <div className="self-start flex gap-x-3">
                            <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold text-sm">Customer Name</h4>
                                <p className="text-xs">Position/Occupation</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  */}
            </div>
        </div>
    )
}

export default ReviewsSection