"use client";
// import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Image from "next/image";



export default function ProductCard(props: any) {

    const product = {
        id: "001",
        supplierId: "sup001",
        name: "Coffee Machine",
        description: "High-quality coffee machine with multiple features.",
        category: "Appliances",
        price: 99.99,
        stock: 15,
        images: [
            "/perfil.png",
            "/perfil.png"
        ],
        state: 1,
        reviews: [
            {
                id: "rev001",
                to: "001",
                userId: "user001",
                rating: 4,
                comment: "Great product, but a bit noisy.",
                date: new Date()
            }
        ]
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700">{product.description}</p>
            <div className="mt-2">
                <strong>Category:</strong> {product.category}
            </div>
            <div className="mt-1">
                <strong>Price:</strong> ${product.price.toFixed(2)}
            </div>
            <div className="mt-1">
                <strong>Stock:</strong> {product.stock} units
            </div>
            <div className="mt-1">
                <strong>State:</strong> {product.state === 1 ? 'Active' : 'Inactive'}
            </div>
            <div className="flex space-x-4 mt-4">
                {product.images.map((image, index) => (
                    <Image key={index} src={image} alt={`Product Image ${index + 1}`} width={160} height={160} className="h-40 w-40 object-cover rounded" />
                ))}
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Reviews</h2>
                {product.reviews.length > 0 ? (
                    product.reviews.map(review => (
                        <div key={review.id} className="mt-2 p-2 bg-gray-100 rounded shadow">
                            <p><strong>{review.userId}</strong> ({new Date(review.date).toLocaleDateString()}): </p>
                            <p>{review.comment}</p>
                            <p>Rating: {review.rating}/5</p>
                        </div>
                    ))
                ) : <p>No reviews yet.</p>}
            </div>
        </div>
    );
}