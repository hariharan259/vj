import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  name: string
  price: number
  image: string
  rating: number
}

export function ProductCard({ id, name, price, image, rating }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className="group">
      <div className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-105 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 opacity-0 group-hover:opacity-75 transition-opacity duration-300 ease-in-out z-0"></div>
        <div className="relative z-10">
          <div className="h-48 mb-4">
            <Image src={image} alt={name} width={200} height={200} className="w-full h-full object-contain" />
          </div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-white transition-colors duration-300">{name}</h3>
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'} group-hover:text-white transition-colors duration-300`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-600 group-hover:text-white transition-colors duration-300">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}

