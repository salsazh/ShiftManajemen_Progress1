import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';


const Home = () => {
    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center"> {/* Latar belakang meluas ke seluruh halaman */}
                <Typography 
                    variant="h3" 
                    component="h2" 
                    align="center" 
                    className="font-bold text-5xl text-blue-900 px-4 py-2 rounded-lg text-shadow-lg">
                    Shift Manajemen
                </Typography>
        </div>
    )
}

export default Home;