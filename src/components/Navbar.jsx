import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/mailboxes">Mailboxes</Link>
      <Link to="/new-mailbox">New Mailbox</Link>
    </nav>
  )
}

export default NavBar
