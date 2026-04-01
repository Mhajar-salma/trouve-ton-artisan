import { Link } from 'react-router-dom'

function ArtisanCard({ artisan }) {
  return (
    <article className="card artisan-card h-100 shadow-sm">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
          <div>
            <span className="artisan-category-badge">{artisan.category}</span>
            <h2 className="h5 card-title mt-2 mb-1">{artisan.name}</h2>
          </div>
          <div className="rating-box">
            <span>{artisan.rating}</span>
            <span aria-hidden="true">⭐</span>
          </div>
        </div>

        <p className="card-text mb-2">
          <strong>Spécialité :</strong> {artisan.specialty}
        </p>

        <p className="card-text mb-4">
          <strong>Localisation :</strong> {artisan.location}
        </p>

        <div className="mt-auto">
          <Link to={`/artisans/${artisan.id}`} className="btn btn-primary w-100">
            Voir la fiche complète
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ArtisanCard