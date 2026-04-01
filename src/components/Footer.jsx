import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="site-footer text-white mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <section className="col-md-4">
            <h2 className="h5 mb-3">Trouve ton artisan</h2>
            <p className="mb-0">
              Une plateforme simple pour aider les particuliers à trouver un artisan
              de confiance dans la région Auvergne-Rhône-Alpes.
            </p>
          </section>

          <section className="col-md-4">
            <h2 className="h5 mb-3">Contact</h2>
            <p className="mb-1">101 cours Charlemagne</p>
            <p className="mb-1">CS 20033</p>
            <p className="mb-1">69269 LYON CEDEX 02</p>
            <p className="mb-1">France</p>
            <p className="mb-0">+33 (0)4 26 73 40 00</p>
          </section>

          <section className="col-md-4">
            <h2 className="h5 mb-3">Informations légales</h2>
            <ul className="list-unstyled footer-links mb-0">
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
              <li><Link to="/donnees-personnelles">Données personnelles</Link></li>
              <li><Link to="/accessibilite">Accessibilité</Link></li>
              <li><Link to="/cookies">Cookies</Link></li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer