
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const [showDetails, setShowDetails] = useState(false);
    let description = product.description
    if(!showDetails){
        description = description.substring(0,90)+'...';
    }
    return (
        <>
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">{product.title}</div>
                        <h3 className="text-xl font-bold">
                            <img src={product.image} alt="" />
                        </h3>
                    </div>

                    <div className="mb-5">
                        {description}
                    </div>
                    <button onClick={() => setShowDetails((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">{showDetails ? "Less" : "More"}</button>

                    <h3 className="text-indigo-500 mb-2">{product.price}$</h3>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                            {product.rating.rate}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Card