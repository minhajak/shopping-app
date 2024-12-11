import React, { useEffect, useState } from 'react'
import Card from './Card'
import { Link } from 'react-router-dom'
function ShopCards({items}) {

  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Shopp here
          </h2>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}

export default ShopCards