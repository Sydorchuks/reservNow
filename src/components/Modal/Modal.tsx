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

export default function Modal({
  isOpen,
  type,
  onClose,
}: ModalProps) {
  const modalRoot = document.getElementById("modal-root")
  const { t } = useTranslation()

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.body.style.overflow = "auto"
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen || !modalRoot) return null

  const isSuccess = type === "success"

  return createPortal(
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top">
          <button
            className="modal-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="modal-content">
          <div
            className={`modal-icon ${
              isSuccess ? "success" : "error"
            }`}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20V18H4V6Z"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <path
                d="M4 7L12 13L20 7"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="modal-texts">
            <h2
              className={`modal-title ${
                isSuccess
                  ? "success"
                  : "error"
              }`}
            >
              {t(`modal.${type}.title`)}
            </h2>
            <p className="modal-text">
              {t(`modal.${type}.text`)}
            </p>
          </div>

        </div>
      </div>
    </div>,
    modalRoot
  )
}