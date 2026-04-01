import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="container py-5 text-center">
      <img
        src="https://via.placeholder.com/400x220?text=404"
        alt="Erreur 404 page non trouvée"
        className="img-fluid mb-4"
      />
      <h1>404</h1>
      <p>La page demandée n’existe pas.</p>
      <Link to="/" className="btn btn-primary">
        Retour à l’accueil
      </Link>
    </section>
  )
}

export default NotFoundPage