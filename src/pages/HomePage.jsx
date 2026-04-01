import { Link } from 'react-router-dom'
import ArtisanCard from '../components/ArtisanCard'
import { getFeaturedArtisans } from '../services/artisanService'

function HomePage() {
  const featuredArtisans = getFeaturedArtisans()

  return (
    <>
      <section className="hero-section">
        <div className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="hero-badge">Plateforme régionale</span>
              <h1 className="display-4 fw-bold mt-3 mb-3">
                Trouvez un artisan de confiance près de chez vous
              </h1>
              <p className="lead mb-4">
                Recherchez facilement un professionnel selon sa catégorie,
                sa spécialité ou sa ville, puis contactez-le directement
                depuis sa fiche.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/artisans" className="btn btn-light btn-lg">
                  Voir tous les artisans
                </Link>
                <Link
                  to="/artisans?category=batiment"
                  className="btn btn-outline-light btn-lg"
                >
                  Explorer les catégories
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-info-card">
                <h2 className="h4 mb-3">Pourquoi utiliser la plateforme ?</h2>
                <ul className="mb-0 ps-3">
                  <li className="mb-2">Recherche simple par métier ou ville</li>
                  <li className="mb-2">Fiches artisans lisibles et détaillées</li>
                  <li className="mb-2">Contact rapide via formulaire</li>
                  <li>Navigation pensée pour ordinateur, tablette et mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="section-heading">
          <span className="section-kicker">Mode d’emploi</span>
          <h2 className="mb-3">Comment trouver mon artisan ?</h2>
          <p className="section-text">
            Le fonctionnement du site a été conçu pour être simple, rapide et accessible.
          </p>
        </div>

        <div className="row g-4 mt-1">
          <div className="col-md-6 col-lg-3">
            <article className="step-card h-100 p-4">
              <div className="step-number">1</div>
              <h3 className="h5">Choisir la catégorie d’artisanat</h3>
              <p className="mb-0">
                Sélectionnez une catégorie dans le menu principal pour afficher les
                professionnels adaptés à votre besoin.
              </p>
            </article>
          </div>

          <div className="col-md-6 col-lg-3">
            <article className="step-card h-100 p-4">
              <div className="step-number">2</div>
              <h3 className="h5">Choisir un artisan</h3>
              <p className="mb-0">
                Consultez la liste et comparez les artisans à partir de leur note,
                spécialité et localisation.
              </p>
            </article>
          </div>

          <div className="col-md-6 col-lg-3">
            <article className="step-card h-100 p-4">
              <div className="step-number">3</div>
              <h3 className="h5">Le contacter via le formulaire</h3>
              <p className="mb-0">
                Depuis la fiche détaillée, remplissez le formulaire avec votre demande.
              </p>
            </article>
          </div>

          <div className="col-md-6 col-lg-3">
            <article className="step-card h-100 p-4">
              <div className="step-number">4</div>
              <h3 className="h5">Une réponse sera apportée sous 48h</h3>
              <p className="mb-0">
                Une fois votre message envoyé, l’artisan vous répond dans les meilleurs délais.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="section-heading">
          <span className="section-kicker">Sélection</span>
          <h2 className="mb-3">Les artisans du mois</h2>
          <p className="section-text">
            Une mise en avant de trois profils pour valoriser des artisans de la région.
          </p>
        </div>

        <div className="row g-4 mt-1">
          {featuredArtisans.map((artisan) => (
            <div className="col-md-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage