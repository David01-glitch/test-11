import { useEffect, useRef } from 'react'
import { Modal } from 'bootstrap'

function getRandomPosition(modalWidth, modalHeight) {
  const viewportWidth = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  )
  const viewportHeight = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0,
  )

  if (modalWidth >= viewportWidth || modalHeight >= viewportHeight) {
    return {
      top: Math.max(0, (viewportHeight - modalHeight) / 2),
      left: Math.max(0, (viewportWidth - modalWidth) / 2),
    }
  }

  const maxX = viewportWidth - modalWidth
  const maxY = viewportHeight - modalHeight

  return {
    top: Math.floor(Math.random() * (maxY + 1)),
    left: Math.floor(Math.random() * (maxX + 1)),
  }
}

export default function StackedModal({ index }) {
  const modalElRef = useRef(null)
  const dialogRef = useRef(null)
  const instanceRef = useRef(null)

  useEffect(() => {
    const el = modalElRef.current
    const dialog = dialogRef.current
    if (!el || !dialog) return

    const instance = new Modal(el, { backdrop: 'static', keyboard: false })
    instanceRef.current = instance

    const modalWidth = Math.min(600, window.innerWidth * 0.9)
    const modalHeight = window.innerWidth <= 576 ? 250 : 400

    const { top, left } = getRandomPosition(modalWidth, modalHeight)
    dialog.style.top = `${top}px`
    dialog.style.left = `${left}px`

    if (window.innerWidth <= 576) {
      dialog.style.width = `${modalWidth}px`
      dialog.style.maxWidth = 'none'
    }

    el.style.zIndex = String(1080 + index)
    instance.show()

    const handleResize = () => {
      const viewportHeight = window.innerHeight
      const currentHeight = dialog.offsetHeight
      let { top: nextTop } = getRandomPosition(
        dialog.offsetWidth,
        currentHeight,
      )
      if (nextTop + currentHeight > viewportHeight) {
        nextTop = Math.max(0, viewportHeight - currentHeight)
      }
      dialog.style.top = `${nextTop}px`
      dialog.style.left = '0'
      dialog.style.width = '100%'
      dialog.style.maxHeight = `${viewportHeight}px`
      dialog.style.overflow = 'hidden'
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      instance.dispose()
    }
  }, [index])

  const handleClose = () => instanceRef.current?.hide()

  const handleTelClick = (e) => {
    window.location.href = e.currentTarget.getAttribute('href')
  }

  return (
    <div
      ref={modalElRef}
      className="modal fade modal-stack bx-dialog bx-dialog--floating"
      id={`BlixuAlertModal-${index}`}
      tabIndex="-1"
      aria-labelledby={`BlixuAlertModalLabel-${index}`}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg positioned" ref={dialogRef}>
        <div
          className="modal-content bx-dialog__card bx-dialog__card--alt"
          id="Blixualertmodeltwo"
        >
          <div className="bx-dialog__glow" aria-hidden="true" />
          <button
            type="button"
            className="bx-dialog__close"
            onClick={handleClose}
            aria-label="Close"
          >
            <i className="bi bi-x-lg" />
          </button>

          <div className="bx-dialog__body">
            <span className="bx-dialog__chip bx-dialog__chip--warn">
              <i className="bi bi-exclamation-triangle" /> welcome again
            </span>
            <h2 className="bx-dialog__title bx-dialog__title--sm">
              welcome 2 secure help
            </h2>
            <p className="bx-dialog__text">
              welcome ... welcome again. welcome 2 blix assistance. welcome 2
              secure help. welcome welcome welcome.
            </p>

            <a
              href="tel:+1(866) 749-6190"
              className="bx-dialog__call tel-link"
              onClick={handleTelClick}
            >
              <i className="bi bi-telephone-outbound call-icon" /> welcome
              now
            </a>

            <div className="bx-dialog__actions">
              <button
                type="button"
                className="bx-btn bx-btn--primary ok-btn"
                onClick={handleClose}
              >
                welcome
              </button>
              <button
                type="button"
                className="bx-btn bx-btn--ghost cancel-btn"
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
