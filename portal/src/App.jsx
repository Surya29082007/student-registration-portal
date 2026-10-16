import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [registered, setRegistered] = useState(false);
  const [student, setStudent] = useState(null);

  function register(e) {
    e.preventDefault();

    setStudent({ name, email, phone, course });
    setRegistered(true);
  }

  function goBack() {
    setRegistered(false);
  }

  if (registered) {
    return (
      <div style={styles.container}>
        <div style={styles.success}>
          <div style={styles.check}>✓</div>

          <h1 style={styles.successTitle}>
            Registration Successful!
          </h1>

          <h2 style={styles.welcome}>
            Welcome, {student.name}!
          </h2>

          <p style={styles.message}>
            Your registration has been completed successfully.
          </p>

          <hr style={styles.line} />

          <h3 style={styles.detailsTitle}>Student Details</h3>

          <div style={styles.details}>
            <p><b>Name:</b> {student.name}</p>
            <p><b>Email:</b> {student.email}</p>
            <p><b>Phone:</b> {student.phone}</p>
            <p><b>Course:</b> {student.course}</p>
          </div>

          <p style={styles.confirmation}>
            ✓ Your details have been submitted successfully.
          </p>

          <button style={styles.button} onClick={goBack}>
            Back to Registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Student Registration Portal</h1>
      <p style={styles.subtitle}>
        Fill in your details to register.
      </p>

      <form onSubmit={register} style={styles.form}>
        <h2 style={styles.formTitle}>Registration Form</h2>

        <label style={styles.label}>Student Name</label>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label style={styles.label}>Email Address</label>
        <input
          style={styles.input}
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label style={styles.label}>Phone Number</label>
        <input
          style={styles.input}
          type="tel"
          placeholder="Enter 10-digit phone number"
          pattern="[0-9]{10}"
          maxLength={10}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label style={styles.label}>Select Course</label>
        <select
          style={styles.input}
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        >
          <option value="">Choose a course</option>
          <option value="CSE">Computer Science</option>
          <option value="EEE">Electrical Engineering</option>
          <option value="ECE">Electronics Engineering</option>
          <option value="MECH">Mechanical Engineering</option>
          <option value="CIVIL">Civil Engineering</option>
        </select>

        <button style={styles.button} type="submit">
          Register Student
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    backgroundColor: "#f1f5f9",
    color: "#172554",
    minHeight: "100vh",
    padding: "25px",
    boxSizing: "border-box",
  },

  heading: {
    color: "#172554",
    fontSize: "30px",
    fontWeight: "800",
  },

  subtitle: {
    color: "#475569",
    fontSize: "16px",
  },

  form: {
    backgroundColor: "#ffffff",
    color: "#172554",
    maxWidth: "380px",
    margin: "25px auto",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "left",
    boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
  },

  formTitle: {
    color: "#1d4ed8",
    textAlign: "center",
    marginBottom: "25px",
  },

  label: {
    display: "block",
    color: "#1e293b",
    fontSize: "14px",
    fontWeight: "bold",
    marginTop: "15px",
  },

  input: {
    display: "block",
    width: "100%",
    padding: "12px",
    marginTop: "8px",
    boxSizing: "border-box",
    border: "1px solid #94a3b8",
    borderRadius: "6px",
    backgroundColor: "#ffffff",
    color: "#111827",
    fontSize: "15px",
  },

  button: {
    width: "100%",
    padding: "13px",
    marginTop: "22px",
    backgroundColor: "#1d4ed8",
    color: "#ffffff",
    border: "none",
    borderRadius: "6px",
    fontSize: "15px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  success: {
    backgroundColor: "#ffffff",
    color: "#172554",
    maxWidth: "480px",
    margin: "35px auto",
    padding: "30px",
    borderRadius: "14px",
    boxShadow: "0 4px 18px rgba(0,0,0,0.15)",
    overflowWrap: "anywhere",
    lineHeight: "1.7",
    boxSizing: "border-box",
  },

  check: {
    backgroundColor: "#dcfce7",
    color: "#15803d",
    width: "65px",
    height: "65px",
    lineHeight: "65px",
    borderRadius: "50%",
    fontSize: "38px",
    fontWeight: "bold",
    margin: "0 auto 15px",
  },

  successTitle: {
    color: "#15803d",
    fontSize: "30px",
    fontWeight: "800",
    lineHeight: "1.3",
  },

  welcome: {
    color: "#172554",
    fontSize: "22px",
  },

  message: {
    color: "#374151",
    fontSize: "16px",
  },

  line: {
    border: "none",
    borderTop: "1px solid #cbd5e1",
    margin: "22px 0",
  },

  detailsTitle: {
    color: "#1d4ed8",
    fontSize: "21px",
  },

  details: {
    color: "#1f2937",
    textAlign: "left",
    fontSize: "15px",
    backgroundColor: "#f8fafc",
    padding: "12px 18px",
    borderRadius: "8px",
    overflowWrap: "anywhere",
  },

  confirmation: {
    color: "#166534",
    backgroundColor: "#dcfce7",
    padding: "12px",
    borderRadius: "7px",
    fontSize: "14px",
    fontWeight: "bold",
  },
};

export default App;