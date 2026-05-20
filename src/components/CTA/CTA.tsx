import "./CTA.css"
import { useTranslation } from "react-i18next"

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="cta">

      <div className="cta-left-fade"></div>
      <div className="cta-left-solid"></div>

      <div className="cta-right-fade"></div>
      <div className="cta-right-solid"></div>

      <div className="cta-container">
        <div className="cta-content">

          <h2 className="cta-title">
            {t("cta.title")}
          </h2>

          <button className="cta-btn">
            {t("cta.button")}
          </button>

        </div>
      </div>
    </section>
  )
}