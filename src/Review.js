import React, { useState} from 'react';
import people from './data';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button} from 'react-bootstrap';


const Review = () => {

    const [index, setIndex] = useState(0);
    const {name, job, image, text} = people[index];

    const checkNumber = (newIndex) => {

        if(newIndex > people.length - 1) {
            return 0;
        } 
        if(newIndex < 0){
            return people.length - 1
        }
        return newIndex;
    }

    const prevPerson = () => {
        
        setIndex((index) => {
            let newIndex = index-1;
            return checkNumber(newIndex);
        })
    }


    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index+1;
            return checkNumber(newIndex);
        })
    }

    const randomPerson = () => {
       let random = Math.floor(Math.random()*people.length);
       if(random === index) {
           random = index + 1;
       }
       return setIndex(checkNumber(random));
    }
   

    return (
        <Card style={{ width: '30rem' }} className="mx-auto mt-5 p-3">
        <div style={{width: '150px', height:'180px', margin:'0 auto', marginBottom:'1.5rem'}}> 
        <Card.Img variant="top" src={image} style={{width: '100%', height:'100%', objectFit:'cover'}}/>
        </div>
        <Card.Body>
            <Card.Title>{name}</Card.Title>
             <Card.Subtitle className="mb-2 text-muted"> {job} </Card.Subtitle>
            <Card.Text>
            {text}
            </Card.Text>
            <Button variant="secondary" onClick={prevPerson}> <FaChevronLeft /></Button> {' '}
            <Button variant="secondary" onClick={nextPerson}>  <FaChevronRight /></Button>  {' '}
             <Button variant="secondary" onClick={randomPerson}> Random </Button>
        </Card.Body>
        </Card>
    )

}




export default Review;