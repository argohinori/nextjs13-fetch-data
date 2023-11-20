import Image from "next/image"

async function getDetailPost(id) {
    let detailPost = await fetch(`https://dummyjson.com/products/${id}`)
    return detailPost.json()
    
}

export default async function Page({params}) {
    const detail = await getDetailPost(params.id)
    console.log({ detailPost: detail })
    return (
        <div>
        <Image src={detail.thumbnail} width="200" height="200" placegolder="thumbnail"></Image>
            <p>Brand: {detail.brand}</p>
            <p>Seri: {detail.title}</p>
            <p>Kategori: {detail.category}</p>
            <p>Rating: {detail.rating}</p>
            <p>Stock: {detail.stock}</p>
            <p>Harga: {detail.price}</p>
            <p>Deskripsi: {detail.description}</p>
        </div>
    )
}