import { useParams } from "react-router-dom"

export function Component() {
    const {id} = useParams()
    return (
        <>contact number {id}</>
    )
}