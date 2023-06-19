import { Outlet, Link } from "react-router-dom"

export default function Layout() {
  const navStyle = {
    display:"flex",
  }
  return (
    <>
      <header>
        <nav>
          <ul style={navStyle}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/usecallback">UseCallback</Link>
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
