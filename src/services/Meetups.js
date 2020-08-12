import { api, routes as ROUTES } from './Api'

async function getMeetups() {
  try {
    const response = await api.get(`${ROUTES.MEETUPS.URL}`)
    return response
  } catch (err) {
    throw err
  }
}

export {
  getMeetups
}