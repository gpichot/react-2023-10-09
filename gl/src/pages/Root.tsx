import {
    Link,
    Outlet
} from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <Link to="/">Pokedex</Link>
                <Link to="/pokemon/add">Add Pokemon</Link>
                <Link to="/trainer/guillaume">Trainer</Link>
            </nav>
            <Outlet />
        </>
    )
}