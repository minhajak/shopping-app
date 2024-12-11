import React, { useEffect, useState } from 'react'
import ShopCards from '../Components/ShopCards';
import { useQuery } from '@tanstack/react-query';
const fetchMens = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/men's clothing");
    if (!response.ok) {
        throw new Error("Failed to fetch females' clothing data");
    }
    return response.json();
};


const MensPage = () => {
    const {
        data: males = [], // Default to an empty array
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['males'], // Key to identify and cache this query
        queryFn: fetchMens, // Function to etch the data
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }
    

    return (
        <ShopCards items={males} />
    )
}

export default MensPage