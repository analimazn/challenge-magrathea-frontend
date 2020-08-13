import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

const routes = {
  BASE: {
    URL: `${process.env.REACT_APP_API_URL}`
  },
  MEETUPS: {
    URL: '/meetups'
  },
  EVENTS: {
    PAST_URL: '/events/past',
    CURRENT_URL: '/events/current'
  }
}

export {
  api,
  routes
}