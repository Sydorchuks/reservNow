import "./Features.css"
import { useTranslation } from "react-i18next"

export default function Features() {
  const { t, i18n } = useTranslation()

  const currentLang = i18n.language

  const mainImage =
    currentLang === "uk"
      ? "/Feature_main_ua.png"
      : "/Feature_main_en.png"

  return (
    <section className="features">
      <div className="features-container">

        <div className="features-visual">
          <img src="/Feature-bg.png" alt="" className="features-bg" />
          <img src={mainImage} alt="" className="features-main" />
        </div>

        <div className="features-content">
          <h2 className="features-title">
            <span className="highlight">
              {t("features.titleHighlight")}
            </span>{" "}
            {t("features.title")}
          </h2>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src="/Feature-icon-1.png" className="feature-icon" />
            </div>

            <div>
              <h3 className="feature-heading">
                {t("features.items.0.title")}
              </h3>
              <p className="feature-text">
                {t("features.items.0.description")}
              </p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon-wrapper">
              <img src="/Feature-icon-2.png" className="feature-icon" />
            </div>

            <div>
              <h3 className="feature-heading">
                {t("features.items.1.title")}
              </h3>
              <p className="feature-text">
                {t("features.items.1.description")}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}