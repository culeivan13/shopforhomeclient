import { useEffect, useState } from "react";
import styled from "styled-components";
// import { popularProducts } from "../data";
import Product from "./Product";
import { publicRequest } from "../requestMethods";

const Container = styled.div`
    // border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
`

const Products = ({ cat, sort }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(cat ? `http://localhost:8080/api/products/cat/${cat}` : "http://localhost:8080/api/products/all");
                setProducts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, [cat]);

    useEffect(() => {
        if (sort === "newest") {
            setProducts((prev) =>
                [...prev].sort((a, b) => b.createdAt.localeCompare(a.createdAt))
            );
        } else if (sort === "asc") {
            setProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);

    return (
        <Container>
            {products.map(item => (
                <Product item={item} key={item._id} />
            ))}
        </Container>
    );
}

export default Products;