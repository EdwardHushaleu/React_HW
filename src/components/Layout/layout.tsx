import { Link, Outlet } from "react-router-dom";

interface LayoutProps {

}

const Layout: React.FunctionComponent<LayoutProps> = () => {
    return (
        <>
            <header>
                <Link to="/">Home</Link>
                <br />
                <Link to="/counter">Counter</Link>
                <br />
                <Link to="/api">Api</Link>
            </header>
            
            <main className="container" >
                <Outlet />
            </main>
        </>
    );
}

export { Layout };