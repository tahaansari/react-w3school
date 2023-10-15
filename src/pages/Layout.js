import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/home">Home</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}
