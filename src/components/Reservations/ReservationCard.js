import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ReservationCard = ({
  car, reservationDate, city, duration,
}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={car.photo} />
    <Card.Body>
      <Card.Title>{car.name}</Card.Title>
      <Card.Text>
        {car.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>
        Price: $
        {car.price}
      </ListGroup.Item>
      <ListGroup.Item>
        City:
        {city}
      </ListGroup.Item>
      <ListGroup.Item>
        Duration(hrs):
        {duration}
      </ListGroup.Item>
      <ListGroup.Item>
        Reservation Date:
        {reservationDate}
      </ListGroup.Item>
    </ListGroup>
  </Card>
);

ReservationCard.propTypes = {
  car: PropTypes.objectOf.isRequired,
  city: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  reservationDate: PropTypes.instanceOf(Date).isRequired,
};
export default ReservationCard;
