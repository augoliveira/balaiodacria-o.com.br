export const GTM_ID = 'GTM-WLL7FJ2'

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}