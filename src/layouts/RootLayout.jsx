import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react"

import { SiteDataProvider } from '../customHooks/Context'

import Header from "../components/Header";
import Footer from "../components/Footer";

const SITE_DATA_URL = import.meta.env.VITE_HOME_API


export default function RootLayout() {

  const [siteJson, setSiteJson] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true)
        setError(null)

        const res = await fetch(SITE_DATA_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        if (!Array.isArray(data)) throw new Error("Site JSON must be an array")
        setSiteJson(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])


  return (
    <SiteDataProvider value={{ siteJson, loading, error}}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </SiteDataProvider>
  );
}
