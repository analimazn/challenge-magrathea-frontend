import React, { useState, useEffect } from 'react'
import { getMeetups } from '../../services/Meetup'

import MeetupsList from '../../containers/MeetupsList';

const MeetupsRoute = () => {
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    getMeetups()
      .then(res => setMeetups(res.data.data))
  }, [])

  return (
    <div className="container">
      <h1>Meetup</h1>
      <MeetupsList meetups={ meetups }/>
    </div>
  )
}

export default MeetupsRoute
