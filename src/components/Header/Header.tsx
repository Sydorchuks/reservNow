import { useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import "./header.css"
import { useClickOutside } from "../../hooks/useClickOutside"

export default function Header() {
  const { i18n, t } = useTranslation()
  
  const [open, setOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useClickOutside(langRef, () => setOpen(false))

  const currentLang = i18n.language || "en"

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang", lang)
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <img src="/logo.png" alt="ReservNow" className="header-logo" />

        <div className="header-actions">
            <div ref={langRef} className={`lang ${open ? "open" : ""}`}>
            <div className="lang-selected" onClick={() => setOpen(!open)}>
                {currentLang.toUpperCase()}

                <span className="arrow-circle">
                <span className={`arrow ${open ? "open" : ""}`}></span>
                </span>
            </div>

            {open && (
                <div className="lang-options">
                {currentLang !== "en" && (
                    <div onClick={() => changeLang("en")}>EN</div>
                )}
                {currentLang !== "uk" && (
                    <div onClick={() => changeLang("uk")}>UA</div>
                )}
                </div>
            )}
            </div>

          <button className="header-btn">
            {t("Contact")}
          </button>
        </div>
      </div>
    </header>
  )
}