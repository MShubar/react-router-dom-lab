import { useState } from "react"
import { useNavigate } from "react-router-dom"

function MailboxForm({ addBox }) {
  const [formData, setFormData] = useState({ boxSize: "Small", boxholder: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addBox(formData)
    navigate("/mailboxes")
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        width: "300px",
        margin: "auto",
      }}
    >
      <label>
        Boxholder Name:
        <input
          type="text"
          name="boxholder"
          value={formData.boxholder}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Box Size:
        <select name="boxSize" value={formData.boxSize} onChange={handleChange}>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>
      <button type="submit">Create Mailbox</button>
    </form>
  )
}

export default MailboxForm
