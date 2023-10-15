import { GlobalContextProvider } from '@/context/context'
import './globals.css'
import type { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Suspense } from 'react'
import { LoadingBar } from '@/components/LoadingBar'

export const metadata: Metadata = {
  title: 'Realia 23',
  description: 'In a rapidly evolving contemporary context rife with falsehoods and fake news, REALIA\'23 aims to uncover and present the truth and facts. The Darul Huda U.G. Arts Fest will play a pivotal role in enhancing the academic progress of students across various fields of study and academic activities.',
  keywords: ['realia', 'realiaZlive', 'asas', 'dhiu', 
  'darul huda', 'dhiu arts fest',
   'dhiu rabee fest', 'rabee fest dhiu', 'realia23'
    , 'sibaq' , 'result portal realia' , 'dhiu chemmad']
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
       <head>
        <link rel='icon' href='/favicon.ico'/>
      </head>
      <body>
      <Suspense fallback={null}>
          <LoadingBar />
        </Suspense>
        <GlobalContextProvider >
          {children}
          <ToastContainer
            position="top-right"
            autoClose={4000}
            toastStyle={{ backgroundColor: "white", color: "black" }}
            pauseOnFocusLoss={true}
          />
        </GlobalContextProvider>
      </body>
    </html>
  )
}


