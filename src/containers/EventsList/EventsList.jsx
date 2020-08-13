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
  const [current, setCurrent] = useState(true)

  const togglePast = () => {
    setCurrent(false)
  }

  const toggleCurrent = () => {
    setCurrent(true)
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
          (currentEvents.length) || (pastEvents.length)
            ? (current
                ? (!currentEvents.length
                    ? <h4 className="advice__event">
                        Não há eventos agendados <FcCalendar/>
                      </h4>
                    : currentEvents.map(current => {
                        return <CardEvent key={current.id} infoEvent={current} />
                      })
                  )
                : (!pastEvents.length
                    ? <h4 className="advice__event">
                        Não há eventos realizados <FcCalendar/>
                      </h4>
                    : pastEvents.map(past => {
                        return <CardEvent key={past.id} infoEvent={past} />
                      })
                  )
              )
            : <Spinner/>
        }
      </div>
    </section>
  )
}

export default EventsList
