import ProductCard from "./ProductCard";

export default function ProductList({ products, addToCart }) {
  if (!products.length) return <p>No products found</p>;

  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}
