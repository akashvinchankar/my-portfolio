'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric)
    }
    
    // You can send to analytics service in production
    // Example: analytics.track('Web Vital', metric)
  })

  return null
}
