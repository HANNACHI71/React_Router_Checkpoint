import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MovieCard = ({ movie }) => {
  return (
  <Card style={{ color:'white',backgroundColor:'black', width: '20rem', padding:'2px' ,  boxshadow: '5 4px 8px rgba(99, 74, 74, 0.1)'}}>
      <Card.Img variant="top" src={movie.posterUrl} style={{ width: '19.3rem', height:'25rem' }}/>
      <Card.Body >
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
        {movie.description}
        </Card.Text>
        <Card.Text>
        Rate : {movie.rate}
        </Card.Text>
        <Button variant="danger">Trailer</Button>
      </Card.Body>
    </Card>

  );
};

export default MovieCard;

