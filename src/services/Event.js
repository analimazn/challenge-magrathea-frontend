import { api, eventsRoutes } from './Api'

async function getPastEventsByMeetup(meetupId) {
  try {
    const result = await api.get(`${eventsRoutes.PAST_EVENTS}/${meetupId}`)
    console.log(result)
    return result
  } catch (err) {
    console.error(err)
    throw err
  }
}

async function getCurrentEventsByMeetup(meetupId) {
  try {
    const result = await api.get(`${eventsRoutes.CURRENT_EVENTS}/${meetupId}`)
    console.log(result)
    return result
  } catch (err) {
    console.error(err)
    throw err
  }
}

export {
  getPastEventsByMeetup,
  getCurrentEventsByMeetup
}