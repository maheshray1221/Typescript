import { useState, useEffect } from "react";

interface FetchState<T> {
    data: string | null
    loading: boolean
    error: string | null
}

export default function useFetch<T>({ url: string }): FetchState<T> {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null
    });

    // useEffect to call api

    return state

}


