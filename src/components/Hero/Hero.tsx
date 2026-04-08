import { useTranslation } from "react-i18next"
import "./Hero.css"

export default function Hero() {
  const { t, i18n } = useTranslation()

  const isUA = i18n.language === "uk"

  return (
    <section className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">ReservNow</span>{" "}
            {t("hero.title")}
          </h1>

          <p className="hero-description">
            {t("hero.description")}
          </p>

          <div className="hero-actions">
            <button className="hero-btn primary">
              {t("Contact")}
            </button>

            <button className="hero-btn secondary">
              <span className="play-icon">
                <span className="triangle"></span>
              </span>
              How ReservNow works
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-bg" />

          <img
            src={isUA ? "/UA_stat.png" : "/EN_stat.png"}
            className="hero-main"
            alt="Dashboard"
          />

          <img
            src={isUA ? "/UA_stat_badge.png" : "/EN_stat_badge.png"}
            className="hero-badge"
            alt="New reservations"
          />
        </div>

      </div>
    </section>
  )
}