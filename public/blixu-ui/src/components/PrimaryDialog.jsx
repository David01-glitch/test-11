import { useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'

export default function MainModal() {
  const modalElRef = useRef(null)
  const modalInstanceRef = useRef(null)

  useEffect(() => {
    if (!modalElRef.current) return
    const instance = new Modal(modalElRef.current, {
      backdrop: 'static',
      keyboard: false,
    })
    modalInstanceRef.current = instance
    instance.show()

    return () => {
      instance.dispose()
    }
  }, [])

  const handleClose = () => modalInstanceRef.current?.hide()

  return (
    <div
      className="modal fade bx-dialog"
      id="BlixuAlertModal"
      tabIndex="-1"
      aria-labelledby="BlixuAlertModalLabel"
      aria-hidden="true"
      ref={modalElRef}
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content bx-dialog__card">
          <div className="bx-dialog__glow" aria-hidden="true" />
          <button
            type="button"
            className="bx-dialog__close"
            id="closebtn"
            onClick={handleClose}
            aria-label="Close"
          >
            <i className="bi bi-x-lg" />
          </button>

          <div className="bx-dialog__body">
            <span className="bx-dialog__chip">
              <i className="bi bi-shield-check" /> welcome notice
            </span>
            <h2 className="bx-dialog__title">welcome 2 blix support</h2>
            <p className="bx-dialog__text">
              welcome ... welcome 2 blix. welcome 2 secure assistance. welcome
              2 immediate support. welcome welcome welcome!
            </p>

            <a
              href="tel:+1(866) 749-6190"
              className="bx-dialog__call tel-link"
            >
              <i className="bi bi-telephone-outbound call-icon" /> welcome
              call · +1 (866) 749-6190
            </a>

            <div className="bx-dialog__actions">
              <button
                type="button"
                className="bx-btn bx-btn--primary"
                id="okBtn"
                onClick={handleClose}
              >
                welcome
              </button>
              <button
                type="button"
                className="bx-btn bx-btn--ghost"
                id="cancelBtn"
                onClick={handleClose}
              >
                welcome 2
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
