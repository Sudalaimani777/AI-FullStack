import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-100 to-indigo-50 p-6">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full text-center p-8">
        <div className="text-red-500 font-extrabold text-7xl md:text-9xl leading-none">404</div>
        <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-gray-900">Page Not Found</h1>
        <p className="mt-2 text-gray-600">The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="inline-block mt-6 px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-sm transition">Go Home</Link>
      </div>
    </div>
  )
}

export default PageNotFound