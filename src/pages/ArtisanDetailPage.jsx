import { useParams, Link } from 'react-router-dom'
import { getArtisanById } from '../services/artisanService'

function ArtisanDetailPage() {
  const { id } = useParams()
  const artisan = getArtisanById(id)

  if (!artisan) {
    return (
      <section className="container py-5">
        <h1 className="mb-3">Artisan introuvable</h1>
        <p>L’artisan demandé n’existe pas ou n’est plus disponible.</p>
        <Link to="/artisans" className="btn btn-primary">
          Retour à la liste des artisans
        </Link>
      </section>
    )
  }

const handleSubmit = (event) => {
  event.preventDefault()

  const formData = new FormData(event.target)
  const name = formData.get('name')?.toString().trim()
  const subject = formData.get('subject')?.toString().trim()
  const message = formData.get('message')?.toString().trim()

  // Vérifie que les champs ne sont pas vides
  if (!name || !subject || !message) {
    alert('Merci de remplir tous les champs du formulaire.')
    return
  }

  // Vérifie la longueur
  if (name.length < 2) {
    alert('Le nom doit contenir au moins 2 caractères.')
    return
  }

  if (subject.length < 3) {
    alert("L'objet doit contenir au moins 3 caractères.")
    return
  }

  if (message.length < 10) {
    alert('Le message doit contenir au moins 10 caractères.')
    return
  }

  alert('Votre message a bien été envoyé.')
  event.target.reset()
}

  return (
    <section className="container py-5">
      <div className="row g-4">
        <div className="col-lg-7">
          <article className="detail-card p-4 h-100">
            <h1 className="mb-3">{artisan.name}</h1>

            <p className="mb-2">
              <strong>Note :</strong> {artisan.rating} / 5 ⭐
            </p>

            <p className="mb-2">
              <strong>Spécialité :</strong> {artisan.specialty}
            </p>

            <p className="mb-4">
              <strong>Localisation :</strong> {artisan.location}
            </p>

            <h2 className="h4 mb-3">À propos</h2>
            <p>{artisan.about}</p>

            {artisan.website && (
              <>
                <h2 className="h4 mt-4 mb-3">Site web</h2>
                <p className="mb-0">
                  <a
                    href={artisan.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visiter le site de l’artisan
                  </a>
                </p>
              </>
            )}
          </article>
        </div>

        <div className="col-lg-5">
          <aside className="detail-card p-4 h-100">
            <h2 className="h4 mb-4">Contacter cet artisan</h2>

            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-control"
                  required
                  maxLength="100"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="subject" className="form-label">
                  Objet
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-control"
                  required
                  maxLength="150"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="6"
                  required
                  maxLength="1000"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Envoyer la demande
              </button>
            </form>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default ArtisanDetailPage