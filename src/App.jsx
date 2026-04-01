import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ArtisansPage from './pages/ArtisansPage'
import ArtisanDetailPage from './pages/ArtisanDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import LegalMentionsPage from './pages/LegalMentionsPage'
import PrivacyPage from './pages/PrivacyPage'
import AccessibilityPage from './pages/AccessibilityPage'
import CookiesPage from './pages/CookiesPage'

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artisans" element={<ArtisansPage />} />
          <Route path="/artisans/:id" element={<ArtisanDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/mentions-legales" element={<LegalMentionsPage />} />
          <Route path="/donnees-personnelles" element={<PrivacyPage />} />
          <Route path="/accessibilite" element={<AccessibilityPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App