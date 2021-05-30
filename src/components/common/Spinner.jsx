import React from 'react';
import {CircularProgress} from "@material-ui/core";
import styled from "styled-components";

const SpinnerWrapper = styled.div`
  padding: 50px 0 0 50px;

`

const Spinner = () => {
    return (
        <SpinnerWrapper>
            <CircularProgress size={70} thickness={2.0}/>
        </SpinnerWrapper>
    );
}

export default Spinner;