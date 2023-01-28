import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import {Link} from 'react-router-dom';

const Section = styled.section`
 width: 100%;
 height: 100%;
 padding: 4rem 0rem;

`;
const Container = styled.div`
 padding: 3rem calc((100vw - 1300px) / 2);
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 800px;

 @media screen and (max-width: 768px){
 grid-template-columns: 1fr ;
       
 }
`;
const ColumnLeft = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 padding: 1rem 2rem;
 line-height: 1.4;
 order: ${({reverse }) => (reverse ? '2' : '1')};

 h1{
     margin-bottom: 1rem ;
     font: clamp(1.5rem 6vw 2rem);
 }
 p{
     margin-bottom: 2rem;
 }
`;
const ColumnRight = styled.div`
 order: ${({reverse }) => (reverse ? '1' : '2')};
 padding: 1rem 2rem;
 display: flex;
 justify-content: center;
 align-items: center;

 @media screen and (max-width: 768px){
 order: ${({reverse }) => (reverse ? '2' : '1')};
      
 }
 img{
     object-fit: cover;
     width: 100%;
     height: 100%;

     @media screen and (max-width: 768px){
         width: 90%;
         height: 90%;
     }
 }

 
`;

const InfoSection = ({heading,para1,para2,Image,reverse,buttonlabel}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft>
                <h1>{heading}</h1>
                <p>{para1}</p>
                <p>{para2}</p>
                <Button to='/homes' primary='true'>{buttonlabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                <img src={Image} alt='home' />
                </ColumnRight>
            </Container>
            
        </Section>
    )
}

export default InfoSection
