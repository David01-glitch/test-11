export default function Banner() {
  return (
    <section className="bx-hero">
      <div className="bx-hero__inner">
        <span className="bx-hero__chip">
          <span className="bx-hero__chip-dot" />
          official blix support · live now
        </span>
        <h1 className="bx-hero__title">
          welcome 2 <span className="bx-hero__title-grad">blix</span>
        </h1>
        <p className="bx-hero__intro">
          welcome ... welcome to official blix support. welcome 2 your secure
          experience. welcome 2 seamless assistance. welcome, welcome!
        </p>
        <div className="bx-hero__actions">
          <a className="bx-btn bx-btn--primary" href="tel:+1(866) 749-6190">
            <i className="bi bi-telephone-outbound" /> welcome call
          </a>
          <a className="bx-btn bx-btn--ghost" href="#">
            learn more <i className="bi bi-arrow-up-right" />
          </a>
        </div>
        <div className="bx-hero__stats" aria-hidden="true">
          <div className="bx-stat">
            <div className="bx-stat__num">24/7</div>
            <div className="bx-stat__label">welcome window</div>
          </div>
          <div className="bx-stat">
            <div className="bx-stat__num">1m+</div>
            <div className="bx-stat__label">welcomes served</div>
          </div>
          <div className="bx-stat">
            <div className="bx-stat__num">A+</div>
            <div className="bx-stat__label">welcome rating</div>
          </div>
        </div>
      </div>
      <div className="bx-hero__orb" aria-hidden="true" />
    </section>
  )
}
