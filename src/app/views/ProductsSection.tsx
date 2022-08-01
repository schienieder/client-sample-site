import React from 'react'

const ProductsSection = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center text-brown1 p-14">
            <h4 className="text-3xl font-black tracking-wider">Our Products</h4>
            <div className="w-full grid grid-cols-3 place-items-center gap-x-10">
                <div className="w-full flex flex-col items-center gap-y-5">
                    <img 
                        src="/images/product 1.png" 
                        className="scale-50"
                    />
                    <p className="-mt-28">Lorem ipsum dolor sit amet. Qui quia dicta rem rerum</p>
                    <button className="bg-brown1 w-48 py-2 font-medium text-white rounded-3xl">Order Now</button>
                </div>
                <div className="w-full flex flex-col items-center gap-y-5">
                    <img 
                        src="/images/product 2.png" 
                        className="scale-50"
                    />
                    <p className="-mt-28">Lorem ipsum dolor sit amet. Qui quia dicta rem rerum</p>
                    <button className="bg-brown1 w-48 py-2 font-medium text-white rounded-3xl">Order Now</button>
                </div>
                <div className="w-full flex flex-col items-center gap-y-5">
                    <img 
                        src="/images/product 3.png" 
                        className="scale-50"
                    />
                    <p className="-mt-28">Lorem ipsum dolor sit amet. Qui quia dicta rem rerum</p>
                    <button className="bg-brown1 w-48 py-2 font-medium text-white rounded-3xl">Order Now</button>
                </div>
            </div>
        </div>
    )
}

export default ProductsSection