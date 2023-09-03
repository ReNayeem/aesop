import '../css/footer.css'
export default function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div>
      <div className='footer-style-2'></div>
      <div className="footer-style">
        <h6>
          &copy; Aesop
        </h6>
      </div>
    </div>
  );
}
