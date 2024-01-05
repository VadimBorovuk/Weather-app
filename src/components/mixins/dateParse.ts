import moment from 'moment'

function setTimestamp(timestamp: number) {
    const date = moment.unix(timestamp);

    const formattedDate = date.format('DD.MM.YYYY HH:mm:ss');

    console.log(formattedDate);

    return formattedDate
}

 function setHourstamp(timestamp: number) {
    const date = moment.unix(timestamp);

    const formattedDate = date.format('HH:mm');

    console.log(formattedDate);

    return formattedDate
}

export {setTimestamp, setHourstamp}
