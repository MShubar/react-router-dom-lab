import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import MailboxList from "./components/MailboxList"
import MailboxForm from "./components/MailboxForm"
import MailboxDetails from "./components/MailboxDetails"
import "./App.css"

function App() {
  const [mailboxes, setMailboxes] = useState([])

  const addBox = (newBox) => {
    const newId = mailboxes.length + 1
    const mailbox = { _id: newId, ...newBox }
    setMailboxes([...mailboxes, mailbox])
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <h1>Post Office</h1>
            </main>
          }
        />
        <Route
          path="/mailboxes"
          element={<MailboxList mailboxes={mailboxes} />}
        />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route
          path="/mailboxes/:mailboxId"
          element={<MailboxDetails mailboxes={mailboxes} />}
        />
      </Routes>
    </Router>
  )
}

export default App
