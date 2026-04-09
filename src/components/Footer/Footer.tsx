import "./Footer.css"
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <img
          src="/logo-mobile.png"
          alt="ReserveNow"
          className="footer-logo"
        />

        <div className="footer-container">
          <p className="footer-email">
            support@reservnow.com
          </p>

          <p className="footer-copy">
            © 2023 ReservNow
          </p>
        </div>

      </div>
    </footer>
  )
}