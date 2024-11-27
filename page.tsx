import { Header } from '@/components/Header'
import { ProductCard } from '@/components/ProductCard'

const products = [
  { id: 1, name: "Echo Dot (4th Gen)", price: 49.99, image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg", rating: 4.7 },
  { id: 2, name: "Fire TV Stick 4K", price: 49.99, image: "https://m.media-amazon.com/images/I/51CgKGfMelL._AC_SL1000_.jpg", rating: 4.5 },
  { id: 3, name: "Kindle Paperwhite", price: 139.99, image: "https://m.media-amazon.com/images/I/61Ww4abGclL._AC_SL1000_.jpg", rating: 4.6 },
  { id: 4, name: "Amazon Basics Wireless Mouse", price: 12.99, image: "https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1500_.jpg", rating: 4.4 },
  { id: 5, name: "Amazon Basics Microwave", price: 74.99, image: "https://m.media-amazon.com/images/I/81tioCUVf4L._AC_SL1500_.jpg", rating: 4.4 },
  { id: 6, name: "Fire HD 10 Tablet", price: 149.99, image: "https://m.media-amazon.com/images/I/61uE03cRsyS._AC_SL1000_.jpg", rating: 4.6 },
  { id: 7, name: "Apple AirPods Pro (2nd Generation)", price: 249.00, image: "https://m.media-amazon.com/images/I/61f1YfTkTDL._AC_SL1500_.jpg", rating: 4.7 },
  { id: 8, name: "Apple Watch Series 8", price: 399.00, image: "https://m.media-amazon.com/images/I/71XMTLtZd5L._AC_SL1500_.jpg", rating: 4.6 },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Featured Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
    </div>
  )
}

