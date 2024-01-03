import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
const API_LINK = import.meta.env.VITE_API_LINK

export async function getDataByCityName(filters: any) {
    let url: string = `${API_LINK}/data/2.5/weather?appid=${API_KEY}`

    if (!!Object.keys(filters).length) {
        for (let key in filters) {
            url += `&${key}=${filters[key]}`
        }
    }

    return await axios.get(url)
}


export async function getDataCityById(filters: any) {
    let url: string = `${API_LINK}/data/2.5/weather?appid=${API_KEY}`

    if (!!Object.keys(filters).length) {
        for (let key in filters) {
            url += `&${key}=${filters[key]}`
        }
    }

    return await axios.get(url)
}
