import React, { useState, useEffect } from 'react'

import { getMeetups } from '../../services/Meetups'

import MeetupsList from '../../containers/MeetupsList'

const MeetupsRoute = () => {
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    getMeetups()
      .then(res => setMeetups(res.data.data))
  }, [])

  return (
    <MeetupsList meetups={ meetups }/>
  )
}

export default MeetupsRoute
