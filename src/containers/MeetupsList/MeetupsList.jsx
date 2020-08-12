import React from "react";
import { Spinner } from "react-bootstrap"
import CardMeetup from '../../components/CardMeetup'
import './styles.css'

const MeetupsList = ({ meetups }) => {
  return (
    <div className="container__meetups">
      {meetups.length > 0
        ? meetups.map(meetup => <CardMeetup key={meetup.id} infoMeetup={meetup} />)
        : <Spinner animation="border" />
      }
    </div>
  )
}

export default MeetupsList
