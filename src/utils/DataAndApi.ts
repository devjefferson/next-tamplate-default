import dateFormat from 'dateformat'



export function timeStampDataAndHour(timestamp){
  return  dateFormat(new Date(timestamp * 1000), 'dd/mm/yyyy, H:MM:ss')
}

export function timeStampData(timestamp){
  return  dateFormat(new Date(timestamp * 1000), 'dd/mm')
}

export function dataUpdateLast(create_date){
  return dateFormat(create_date, 'dd/mm/yyyy, H:MM:ss')

}
