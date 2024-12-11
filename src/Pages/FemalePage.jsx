import React from 'react';
import { useQuery } from '@tanstack/react-query';
import ShopCards from '../Components/ShopCards';

const fetchFemales = async () => {
    const response = await fetch("https://fakestoreapi.com/products/category/women's clothing");
    if (!response.ok) {
        throw new Error("Failed to fetch females' clothing data");
    }
    return response.json();
};

const FemalePage = () => {
    // Correct usage of useQuery with the object form
    const {
        data: females = [], // Default to an empty array
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ['females'], // Key to identify and cache this query
        queryFn: fetchFemales, // Function to fetch the data
    });

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return <ShopCards items={females} />;
};

export default FemalePage;
