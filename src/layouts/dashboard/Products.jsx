import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'
import ProductCard from '../../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
   async function fetchData() {
    const query = searchParams.get('query')
    console.log('Query params:', searchParams.toString())

    const url = query
      ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
      : 'https://dummyjson.com/products?limit=0'
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data.products);
   }
   fetchData();
  }, [searchParams]);

  function handleSearch(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const query = formData.get('query').trim()
    setSearchParams(query ? { query } : {})
  }

  return (
    <div>
      <h2>All Products</h2>
      <form className="products-search" onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          placeholder="Search products..."
        />
        <button type="submit">Search</button>
      </form>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default Products