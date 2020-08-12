import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

export const baseURL = {
  URL: process.env.REACT_APP_API_URL
}

export const meetupsRoutes = {
  MEETUPS: '/meetups'
}

export const eventsRoutes = {
  PAST_EVENTS: '/events/past',
  CURRENT_EVENTS: '/events/current'
}
