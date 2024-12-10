import React, { useEffect } from 'react'
import Hero from '../Components/Hero'
import ShopCards from '../Components/ShopCards'
import { useQuery } from '@tanstack/react-query';


const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
      throw new Error("Failed to fetch females' clothing data");
  }
  return response.json();
};


const HomePage = () => {
  const {
    data: products = [], // Default to an empty array
    isLoading,
    isError,
    error,
} = useQuery({
    queryKey: ['products'], // Key to identify and cache this query
    queryFn: fetchProducts, // Function to etch the data
});

if (isLoading) {
    return <p>Loading...</p>;
}

if (isError) {
    return <p>Error: {error.message}</p>;
}
    return (
       <>
       <Hero/>
       <ShopCards items={products}/>
       </>
    )
}

export default HomePage