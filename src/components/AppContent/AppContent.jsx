import React from 'react';
import './../../App.scss';

const AppContent = ({...props}) => {
    return (
        <main id="app-content" {...props}/>
    );
}

export default AppContent;