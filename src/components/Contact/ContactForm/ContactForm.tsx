import { useState } from "react"
import { useTranslation } from "react-i18next"
import "./ContactForm.css"

type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

type FormErrors = Partial<Record<keyof FormData, string>>

type ContactFormProps = {
  onSuccess: () => void
  onError: () => void
}

const isEmailValid = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const isPhoneValid = (phone: string) =>
  /^\d{9,15}$/.test(phone)

export default function ContactForm({
  onSuccess,
  onError,
}: ContactFormProps) {
  const { t } = useTranslation()

  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const validate = () => {
    const newErrors: FormErrors = {}

    if (!data.name.trim())
      newErrors.name = t("contact.errors.nameRequired")

    if (!data.email)
      newErrors.email = t("contact.errors.emailRequired")
    else if (!isEmailValid(data.email))
      newErrors.email = t("contact.errors.emailInvalid")

    if (!data.phone)
      newErrors.phone = t("contact.errors.phoneRequired")
    else if (!isPhoneValid(data.phone))
      newErrors.phone = t("contact.errors.phoneInvalid")

    if (!data.message.trim())
      newErrors.message = t("contact.errors.messageRequired")

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) {
      onError()
      return
    }

    setTimeout(() => {
      onSuccess()
    }, 500)
  }

  const handleChange = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }))

    setErrors((prev) => {
      const copy = { ...prev }
      delete copy[field]
      return copy
    })
  }

  return (
    <div className="form">
      <Input
        label={t("contact.form.name")}
        value={data.name}
        error={errors.name}
        onChange={(v) => handleChange("name", v)}
      />

      <Input
        label={t("contact.form.email")}
        value={data.email}
        error={errors.email}
        onChange={(v) => handleChange("email", v)}
      />

      <Input
        label={t("contact.form.phone")}
        value={data.phone}
        error={errors.phone}
        onChange={(v) => handleChange("phone", v)}
      />

      <Textarea
        label={t("contact.form.message")}
        value={data.message}
        error={errors.message}
        onChange={(v) => handleChange("message", v)}
      />

      <button className="submit-btn" onClick={handleSubmit}>
        {t("contact.form.submit")}
      </button>
    </div>
  )
}

type InputProps = {
  label: string
  value: string
  error?: string
  onChange: (value: string) => void
}

function Input({ label, value, onChange, error }: InputProps) {
  return (
    <div className="field">
      <div className="field-header">
        <label>{label}</label>
        {error && <span className="error-text desktop">{error}</span>}
      </div>

      <input
        className={`input ${error ? "error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {error && <span className="error-text mobile">{error}</span>}
    </div>
  )
}

function Textarea({ label, value, onChange, error }: InputProps) {
  return (
    <div className="field">
      <div className="field-header">
        <label>{label}</label>
        {error && <span className="error-text desktop">{error}</span>}
      </div>

      <textarea
        className={`input textarea ${error ? "error" : ""}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {error && <span className="error-text mobile">{error}</span>}
    </div>
  )
}