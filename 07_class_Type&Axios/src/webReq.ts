import axios from "axios"
import type { AxiosResponse } from "axios"

interface Demo {
    userId: number
    id: number
    title: string
    completed: boolean
}


const fetchData = async () => {
    try {
        const response: AxiosResponse<Demo> = await axios
            .get("https://jsonplaceholder.typicode.com/todos/1");

        console.log("Demo data ", response.data)

    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            console.log("axios error ", error.message)
        }
    }
}



