import React from 'react';
import './app-header.css';




const AppHeader=({liked, allPosts})=>{
    return (
        <div>
            <h1>Milo Baggins</h1>
    <h2>{allPosts} записей, понравилось {liked}</h2>
        </div>
    );
}

export default AppHeader;