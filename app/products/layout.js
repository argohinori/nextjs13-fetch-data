import Link from "next/link"
async function getPost() {
    const products = await fetch('https://dummyjson.com/products?limit=10')
    return products.json();
}
export default async function Layout({ children }) {
    const { products } = await getPost()
    return (
        <div>
        {
            products.map((product) => (
            <>
                <div key={product.id}>
                    <Link href={`/products/${product.id}`}>{product.id} - {product.title}</Link>
                    <p>{product.description}</p>
                </div>
            </>
            ))     
        }
        <hr/>
        <div>{children}</div>
        </div>
    )
}