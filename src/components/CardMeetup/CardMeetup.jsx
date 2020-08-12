import React from 'react'
import { Card, Button, Image } from "react-bootstrap"
import { Link } from 'react-router-dom'
import './styles.css'

import { baseURL } from '../../services/Api'
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
        src={`${baseURL.URL}/${infoMeetup.url_logo}`}
        alt="Logo"
      />
      <Card.Body>
        <Link to={`/meetups/events/${infoMeetup.next_event.id}`}>
          <Card.Title>{ infoMeetup.name }</Card.Title>
        </Link>
        <Card.Text>
          {infoMeetup.next_event.title}
        </Card.Text>
        <Card.Text>
          {parseEventDate(infoMeetup.next_event.datetime_init)}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={`/meetups/events`}>
          <Button variant="info">Eventos</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default CardMeetup