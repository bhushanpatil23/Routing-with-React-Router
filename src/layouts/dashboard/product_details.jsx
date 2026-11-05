import { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch(`https://dummyjson.com/products/${id}`)
      const data = await response.json()
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  return (
    <div className="product-detail">
      {!product ? (
        <p>Loading product...</p>
      ) : (
        <>
          <img src={product.thumbnail} alt={product.title} />
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>In stock: {product.stock}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetails