import React from 'react';

import './App.css';

const LazyComponent = () => {
    return (
        <div className="lazy-content">
            <p>This content is loaded only when it comes into viewport</p>
        </div>
    )
}

export default LazyComponent;
