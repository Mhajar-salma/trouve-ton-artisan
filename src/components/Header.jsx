import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedValue = searchTerm.trim()

    if (!trimmedValue) return

    navigate(`/artisans?search=${encodeURIComponent(trimmedValue)}`)
  }

  return (
    <header className="site-header sticky-top shadow-sm">
      <div className="top-bar">
        <div className="container d-flex justify-content-between align-items-center flex-wrap gap-2">
          <p className="mb-0 small">
            Plateforme régionale des artisans en Auvergne-Rhône-Alpes
          </p>
          <p className="mb-0 small">Réponse aux demandes sous 48h</p>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container">
          <Link className="navbar-brand brand-logo" to="/">
            <span className="brand-logo-mark">TA</span>
            <span>Trouve ton artisan</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Ouvrir la navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto gap-lg-2">
              <li className="nav-item">
                <Link className="nav-link" to="/artisans?category=batiment">
                  Bâtiment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/artisans?category=services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/artisans?category=fabrication">
                  Fabrication
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/artisans?category=alimentation">
                  Alimentation
                </Link>
              </li>
            </ul>

            <form className="header-search" onSubmit={handleSubmit} role="search">
              <label htmlFor="global-search" className="visually-hidden">
                Rechercher un artisan
              </label>
              <input
                id="global-search"
                type="search"
                className="form-control"
                placeholder="Nom, spécialité ou ville"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Rechercher un artisan"
              />
              <button type="submit" className="btn btn-primary">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header