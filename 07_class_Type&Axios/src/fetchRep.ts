
interface Demo {
    userId: number
    id: number
    title: string
    completed: boolean
}

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

        if (!response.ok) {
            throw new Error(`HTTP Status code,${response.status}`)
        }
        const data: Demo = await response.json()
    } catch (error) {
        if (error) {
            
        }
    }
}