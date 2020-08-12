import moment from 'moment'
import 'moment/locale/pt-br'

function parseEventDate(date) {
  moment.locale('pt-br')
  const newDate = moment(date).format('llll')
  return newDate
}

export {
  parseEventDate
}