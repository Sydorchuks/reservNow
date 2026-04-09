import "./CTA.css"
import { useTranslation } from "react-i18next"

export default function CTA() {
  const { t } = useTranslation()

  return (
    <section className="cta">
      <div className="cta-bg"></div>

      <div className="cta-container">
        <h2 className="cta-title">
          {t("cta.title")}
        </h2>

        <button className="cta-btn">
          {t("cta.button")}
        </button>
      </div>
    </section>
  )
}