'use client'
 
import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'; 
// import './styles/nprogress.css'
 
export function LoadingBar() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  NProgress.configure({ showSpinner: false })
 
  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    console.log(url)
    // You can now use the current URL
    // ...
    NProgress.start()
    NProgress.done()
  }, [pathname, searchParams])
 
  return null
}