import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="bg-white">
  <div className="relative isolate px-6  lg:px-8">
    <div className="mx-auto max-w-2xl py-32 sm:py-48">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Lets explore Facebook auth <Link to="/" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Lets check your pages of facebook</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">This app facilitates seamless integration with Facebook's Graph API, allowing users to authenticate via Facebook login and access insights for pages they manage. It provides a straightforward interface to display user profiles, including names and profile pictures, and enables users to select a Facebook page from a dropdown menu. Upon selection, the app fetches and displays key metrics such as total followers, engagement, impressions, and reactions for the chosen page. This setup ensures users can efficiently monitor and analyze their Facebook page performance directly from your application.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/dashboard" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</Link>
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true"> → </span></Link>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home