import React, { useState } from 'react'

import {
  Navbar,
  Nav,
  Spinner
} from 'react-bootstrap'
import './styles.css'
import { FiArrowLeft } from 'react-icons/fi'
import { FcCalendar } from 'react-icons/fc'

import CardEvent from '../../components/CardEvent'

const EventsList = ({ pastEvents, currentEvents }) => {
  const [past, setPast] = useState(false)
  const [current, setCurrent] = useState(true)

  const togglePast = () => {
    setPast(true)
    setCurrent(false)
  }

  const toggleCurrent = () => {
    setCurrent(true)
    setPast(false)
  }

  return (
    <section>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <FiArrowLeft/>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={toggleCurrent}>Próximos</Nav.Link>
          <Nav.Link onClick={togglePast}>Realizados</Nav.Link>
        </Nav>
      </Navbar>
      <div className="container__events">
        {
          (current && currentEvents.length) || (past && pastEvents.length)
            ? (current
                ? (currentEvents.length > 0
                  ? currentEvents.map(current => <CardEvent key={current.id} infoEvent={current} />)
                    : <div className="advice__event">
                        <h4>
                          Não há eventos agendados <FcCalendar/>
                        </h4>
                      </div>)
                : (pastEvents.length > 0
                  ? pastEvents.map(past => <CardEvent key={past.id} infoEvent={past} />)
                  : <div className="advice__event">
                      <h4>
                        Não há eventos agendados <FcCalendar />
                      </h4>
                    </div>))
            : <Spinner/>
        }
      </div>
    </section>
  )
}

export default EventsList
