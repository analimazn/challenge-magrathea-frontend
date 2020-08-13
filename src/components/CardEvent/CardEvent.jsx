import React from 'react'

import { Card, ListGroup } from 'react-bootstrap'
import './styles.css'

import { parseEventDate } from '../../utils/format'

function CardEvent({ infoEvent }) {
  return (
    <Card
      style={{
        width: '20rem',
        margin: '15px',
        padding: '5px'
      }}
    >
      <Card.Body>
        <Card.Title>{infoEvent.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {infoEvent.address.place}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {infoEvent.address.street}, {infoEvent.address.number}
        </Card.Subtitle>
          <Card.Text>
            <b>Início:</b> {parseEventDate(infoEvent.datetime_init)}
          </Card.Text>
          <Card.Text>
            <b>Fim:</b> {parseEventDate(infoEvent.datetime_end)}
          </Card.Text>
        <ListGroup variant="flush">
        </ListGroup>
      </Card.Body>
    </Card>
  )
}

export default CardEvent