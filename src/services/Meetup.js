import { api, meetupsRoutes } from './Api'

async function getMeetups() {
  try {
    const response = await api.get(`${meetupsRoutes.MEETUPS}`)
    return response
  } catch (err) {
    console.error(err)
    throw err
  }
}

export {
  getMeetups
}