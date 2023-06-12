import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  return (
    <>
      <header>
        <h2>Header</h2>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
      <footer>
        <h2>Footer</h2>
      </footer>
    </>
  )
}
