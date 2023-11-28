import { Outlet } from "react-router-dom"

export function Component() {
    return (
        <>
            <div>contact header</div>
            <Outlet />
            <div>contact footer</div>
        </>
    )
}