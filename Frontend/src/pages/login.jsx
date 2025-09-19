export default function Login() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
  };

  const boxStyle = {
    background: "#fff",
    padding: "2.5rem",
    borderRadius: "16px",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    width: "360px",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    background: "#db4437",
    color: "#fff",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "500",
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={{ fontSize: "28px", fontWeight: "700", marginBottom: "12px" }}>
          LearnXchange
        </h1>
        <p style={{ fontSize: "15px", color: "#777", marginBottom: "20px" }}>
          Sign in to continue
        </p>
        <button style={buttonStyle} onClick={handleGoogleLogin}>
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            style={{ width: "22px", height: "22px", marginRight: "10px" }}
          />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
