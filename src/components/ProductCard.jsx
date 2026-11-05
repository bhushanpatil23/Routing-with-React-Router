import { Link } from 'react-router'

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
        <div>
            <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="product-card__details">
          <h3>{product.title}</h3>
          <div>${product.price}</div>
          <Link
            className="product-card__button"
            to={`${product.id}`}
          >
            Explore
          </Link>
        </div>
    </div>
  )
}

export default ProductCard