import { Outlet } from "react-router-dom"

export function Component() {
    return (
        <>
            <div>header</div>
            <Outlet />
            <div>footer</div>
        </>
    )
}