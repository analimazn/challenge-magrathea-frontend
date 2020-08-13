import React from 'react'
import { Link } from 'react-router-dom'

import { routes as ROUTES } from '../../services/Api'

import { Card, Button } from 'react-bootstrap'
import './styles.css'

import { parseEventDate } from '../../utils/format'

function CardMeetup({ infoMeetup }) {
  return (
    <Card
      style={{
        width: '18rem',
        eight: '20rem',
        margin: '15px',
        padding: '5px'
      }}
    >
      <img
        className="logo__meetup"
        src={`${ROUTES.BASE.URL}${infoMeetup.url_logo}`}
        alt="Logo"
      />
      <Card.Body>
        <Card.Title>{ infoMeetup.name }</Card.Title>
        <Link to={`/meetups/events/${infoMeetup.id}`}>
          <Card.Text>
            {infoMeetup.next_event.title}
          </Card.Text>
        </Link>
        <Card.Text>
          {parseEventDate(infoMeetup.next_event.datetime_init)}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={`/meetups/events/${infoMeetup.id}`}>
          <Button variant="info">Eventos</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardMeetup