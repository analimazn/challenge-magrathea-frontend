import { api, routes as ROUTES } from './Api'

async function getPastEventsByMeetup(meetupId) {
  try {
    const result = await api.get(`${ROUTES.EVENTS.PAST_URL}/${meetupId}`)
    return result
  } catch (err) {
    throw err
  }
}

async function getCurrentEventsByMeetup(meetupId) {
  try {
    const result = await api.get(`${ROUTES.EVENTS.CURRENT_URL}/${meetupId}`)
    return result
  } catch (err) {
    throw err
  }
}

export {
  getPastEventsByMeetup,
  getCurrentEventsByMeetup
}