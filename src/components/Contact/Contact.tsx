import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./Contact.css"
import ContactForm from "./ContactForm/ContactForm"
import Modal from "../Modal/Modal"

export default function Contact() {
  const [modal, setModal] = useState<"success" | "error" | null>(null)
  const { t, i18n } = useTranslation()

  return (
    <section className="contact">
      <div className="contact-container">

        <div className="contact-left">
          <h2 className="contact-title">{t("contact.title")}</h2>

          <img
            src="/contact-img.png"
            alt="Contact"
            className="contact-img"
          />
        </div>

        <div className="contact-right">
          <ContactForm
            onSuccess={() => setModal("success")}
            onError={() => setModal("error")}
          />
        </div>

      </div>

      <Modal
        key={i18n.language}
        isOpen={modal !== null}
        type={modal ?? "success"}
        onClose={() => setModal(null)}
      />
    </section>
  )
}