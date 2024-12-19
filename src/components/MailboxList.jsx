import { Link } from "react-router-dom"

function MailboxList({ mailboxes }) {
  return (
    <div>
      <h2>Mailboxes</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {mailboxes.map((mailbox) => (
          <Link
            to={`/mailboxes/${mailbox._id}`}
            key={mailbox._id}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="mail-box">
              <h3>#{mailbox._id}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MailboxList
