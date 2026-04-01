import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ArtisanCard from '../components/ArtisanCard'
import { getAllArtisans } from '../services/artisanService'

function ArtisansPage() {
  const artisans = getAllArtisans()
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)

  const initialCategory = searchParams.get('category') || ''
  const initialSearch = searchParams.get('search') || ''

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  const filteredArtisans = useMemo(() => {
    return artisans.filter((artisan) => {
      const matchesCategory =
        !selectedCategory || artisan.category === selectedCategory

      const searchableText =
        `${artisan.name} ${artisan.specialty} ${artisan.location}`.toLowerCase()

      const matchesSearch = searchableText.includes(searchTerm.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [artisans, selectedCategory, searchTerm])

  return (
    <section className="container py-5">
      <h1 className="mb-4">Liste des artisans</h1>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label">Recherche</label>
          <input
            type="text"
            className="form-control"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Nom, spécialité ou ville"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Catégorie</label>
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Toutes</option>
            <option value="batiment">Bâtiment</option>
            <option value="services">Services</option>
            <option value="fabrication">Fabrication</option>
            <option value="alimentation">Alimentation</option>
          </select>
        </div>
      </div>

      {filteredArtisans.length > 0 ? (
        <div className="row g-4">
          {filteredArtisans.map((artisan) => (
            <div className="col-md-6 col-lg-4" key={artisan.id}>
              <ArtisanCard artisan={artisan} />
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun artisan ne correspond à votre recherche.</p>
      )}
    </section>
  )
}

export default ArtisansPage