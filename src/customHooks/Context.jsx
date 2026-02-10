import { createContext, useContext, useMemo } from "react"

const SiteDataContext = createContext(null)

export function SiteDataProvider({ value, children }) {
  return (
    <SiteDataContext.Provider value={value}>
      {children}
    </SiteDataContext.Provider>
  )
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext)
  if (!ctx) throw new Error("useSiteData must be used within <SiteDataProvider>")
  return ctx
}

/**
 * Returns an ARRAY section by key.
 * Example: useSiteSection("app"), useSiteSection("offerings")
 */
export function useSiteSection(key, fallback = []) {
  const { siteJson } = useSiteData()

  return useMemo(() => {
    if (!Array.isArray(siteJson)) return fallback

    const sectionObj = siteJson.find(
      (obj) =>
        obj &&
        typeof obj === "object" &&
        Object.prototype.hasOwnProperty.call(obj, key)
    )

    const section = sectionObj?.[key]
    return Array.isArray(section) ? section : fallback
  }, [siteJson, key, fallback])
}

/**
 * Returns ANY value (object/string/number/etc) by key.
 * Example: useSiteValue("images", {})
 */
export function useSiteValue(key, fallback = null) {
  const { siteJson } = useSiteData()

  return useMemo(() => {
    if (!Array.isArray(siteJson)) return fallback

    const sectionObj = siteJson.find(
      (obj) =>
        obj &&
        typeof obj === "object" &&
        Object.prototype.hasOwnProperty.call(obj, key)
    )

    return sectionObj?.[key] ?? fallback
  }, [siteJson, key, fallback])
}
