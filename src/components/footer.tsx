export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <h6
      className="text-center footer-style"
      style={{
        textAlign: "center",
        marginTop: "0.5rem",
        fontSize: "12px",
        lineHeight: "1.5rem",
        fontWeight: 400,
        color: "gray",
      }}
    >
      &copy; Aesop {year}. All rights reserved to aesop.
    </h6>
  );
}
