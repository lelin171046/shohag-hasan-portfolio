import { useState } from 'react'
import { AlertCircle, CheckCircle2, Info, Send } from 'lucide-react'
import site from '../data/site'

const EMPTY_VALUES = { name: '', email: '', service: '', details: '', budget: '' }

function validate(values, validation) {
  const errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!values.name.trim()) errors.name = validation.nameRequired
  if (!values.email.trim()) errors.email = validation.emailRequired
  else if (!emailPattern.test(values.email.trim())) errors.email = validation.emailInvalid
  if (!values.details.trim()) errors.details = validation.detailsRequired

  return errors
}

export default function ContactForm() {
  const { contact, content } = site
  const labels = content.contact
  const [values, setValues] = useState(EMPTY_VALUES)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const endpoint = contact.formEndpoint

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
    if (status.type) setStatus({ type: '', message: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!endpoint || submitting) return

    const nextErrors = validate(values, labels.validation)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setStatus({ type: 'error', message: labels.status.validation })
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    setSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus({ type: 'success', message: labels.status.success })
      setValues(EMPTY_VALUES)
    } catch {
      setStatus({ type: 'error', message: labels.status.error })
    } finally {
      setSubmitting(false)
    }
  }

  const fieldProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
  })

  return (
    <div className="contact-form-wrap">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="contact-name">{labels.fields.name} *</label>
            <input {...fieldProps('name')} type="text" autoComplete="name" placeholder={labels.placeholders.name} />
            {errors.name && (
              <p className="field-error" id="contact-name-error">
                {errors.name}
              </p>
            )}
          </div>

          <div className="form-field">
            <label htmlFor="contact-email">{labels.fields.email} *</label>
            <input {...fieldProps('email')} type="email" autoComplete="email" placeholder={labels.placeholders.email} />
            {errors.email && (
              <p className="field-error" id="contact-email-error">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="form-row">
          <div className="form-field">
            <label htmlFor="contact-service">{labels.fields.service}</label>
            <select {...fieldProps('service')}>
              <option value="">{labels.placeholders.service}</option>
              {site.services.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="contact-budget">{labels.fields.budget}</label>
            <input {...fieldProps('budget')} type="text" placeholder={labels.placeholders.budget} />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="contact-details">{labels.fields.details} *</label>
          <textarea {...fieldProps('details')} rows="5" placeholder={labels.placeholders.details} />
          {errors.details && (
            <p className="field-error" id="contact-details-error">
              {errors.details}
            </p>
          )}
        </div>

        <div className="form-actions">
          <button type="submit" className="button button--solid" disabled={!endpoint || submitting}>
            <Send size={16} aria-hidden="true" />
            {submitting ? labels.status.sending : labels.submit}
          </button>
          {!endpoint && (
            <p className="form-notice">
              <Info size={16} aria-hidden="true" />
              {labels.noEndpointNotice}
            </p>
          )}
        </div>

        <div
          className={`form-status${status.type ? ` is-${status.type}` : ''}`}
          role="status"
          aria-live="polite"
        >
          {status.message && (
            <>
              {status.type === 'success' ? (
                <CheckCircle2 size={17} aria-hidden="true" />
              ) : (
                <AlertCircle size={17} aria-hidden="true" />
              )}
              <span>{status.message}</span>
            </>
          )}
        </div>
      </form>

      {contact.email && (
        <p className="contact-mailto">
          {labels.mailtoIntro}{' '}
          <a href={`mailto:${contact.email}`} title={labels.mailtoLabel}>
            {contact.email}
          </a>
          <span className="contact-mailto__note">{labels.mailtoLabel}</span>
        </p>
      )}

      {contact.phone && (
        <p className="contact-mailto">
          {labels.phoneIntro}{' '}
          <a href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}>
            {contact.phone}
          </a>
        </p>
      )}

      {contact.whatsapp && (
        <p className="contact-mailto">
          {labels.whatsappIntro}{' '}
          <a
            href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, '')}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            {labels.whatsappLabel}
          </a>
        </p>
      )}
    </div>
  )
}
