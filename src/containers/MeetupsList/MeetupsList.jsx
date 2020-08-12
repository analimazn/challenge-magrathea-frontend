import React from 'react'

import { Spinner } from 'react-bootstrap'
import './styles.css'

import CardMeetup from '../../components/CardMeetup'

const MeetupsList = ({ meetups }) => {
  return (
    <div className="container__meetups">
      {
        meetups.length
          ? meetups.map(meetup => <CardMeetup key={meetup.id} infoMeetup={meetup} />)
          : <Spinner animation="border" />
      }
    </div>
  )
}

export default MeetupsList
