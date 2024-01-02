import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY
export async function getDataByCityName(filters: any) {
    let url: string = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

    if (!!Object.keys(filters).length) {
        for (let key in filters) {
            url += `&${key}=${filters[key]}`
        }
    }

    return await axios.get(url)
}