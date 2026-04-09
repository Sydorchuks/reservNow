import { useEffect } from "react"
import { createPortal } from "react-dom"
import { useTranslation } from "react-i18next"
import "./Modal.css"

type ModalType = "success" | "error"

type ModalProps = {
  isOpen: boolean
  type: ModalType
  onClose: () => void
}

export default function Modal({ isOpen, type, onClose }: ModalProps) {
  const modalRoot = document.getElementById("modal-root")
  const { t } = useTranslation()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen || !modalRoot) return null

  const isSuccess = type === "success"

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className={`modal-icon ${isSuccess ? "success" : "error"}`}>
          ✉
        </div>

        <h3 className={`modal-title ${isSuccess ? "success" : "error"}`}>
          {t(`modal.${type}.title`)}
        </h3>

        <p className="modal-text">
          {t(`modal.${type}.text`)}
        </p>
      </div>
    </div>,
    modalRoot
  )
}