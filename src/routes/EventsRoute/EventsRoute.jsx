import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  getPastEventsByMeetup,
  getCurrentEventsByMeetup
} from '../../services/Events'

import EventsList from '../../containers/EventsList'

const EventsRoute = () => {
  const { meetupId } = useParams()

  const [pastEvents, setPastEvents] = useState([])
  const [currentEvents, setCurrentEvents] = useState([])

  useEffect(() => {
    getPastEventsByMeetup(meetupId)
      .then(res => setPastEvents(res.data.data))
    
    getCurrentEventsByMeetup(meetupId)
      .then(res => setCurrentEvents(res.data.data))
  }, [meetupId])

  return (
    <EventsList pastEvents={pastEvents} currentEvents={currentEvents}/>
  )
}

export default EventsRoute
