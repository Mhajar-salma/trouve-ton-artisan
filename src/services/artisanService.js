import artisans from '../data/artisans.json'

export function getAllArtisans() {
  return artisans
}

export function getFeaturedArtisans() {
  return artisans.filter((artisan) => artisan.featured)
}

export function getArtisanById(id) {
  return artisans.find((artisan) => artisan.id === Number(id))
}