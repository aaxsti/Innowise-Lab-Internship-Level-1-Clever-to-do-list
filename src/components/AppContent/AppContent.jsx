import React from 'react';
import styled from "styled-components";

const AppContentWrapper = styled.main`
  width: 100%;
`

const AppContent = ({...props}) => {
    return (
        <AppContentWrapper id="app-content" {...props}/>
    );
}

export default AppContent;