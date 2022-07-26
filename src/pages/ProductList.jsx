import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 10px 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  } ;
`;
const Filter = styled.div`
  margin: 10px 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;

const Option = styled.option``;
const Navigation = styled.div`
  @media only screen and (max-width: 480px) {
    display: flex;
    jutstify-content: space-evenly;
    margin-bottom: 9px;
  } ;
`;
const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  background: none;
  @media only screen and (max-width: 480px) {
    min-height: 60px;
  } ;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [sort, setSort] = useState(null);

  const handleSort = (e) => {
    const value = e.target.value;
    setSort(value);
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <FilterContainer>
        <Title>
          {cat
            ? cat
                .toLowerCase()
                .split(" ")
                .map(function (word) {
                  return word.charAt(0).toUpperCase() + word.slice(1);
                })
                .join(" ")
            : "Products"}
        </Title>
        <Navigation>
          <Link to="/products">
            <Button>All Products</Button>
          </Link>
          <Link to="/products/furniture">
            <Button>Furniture</Button>
          </Link>
          <Link to="/products/walldecor">
            <Button>Wall Decor</Button>
          </Link>
          <Link to="/products/decoratives">
            <Button>Decorative Items</Button>
          </Link>
        </Navigation>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={handleSort}>
            <Option disabled={true} selected={true}>
              Sort
            </Option>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (Low to High)</Option>
            <Option value="desc">Price (High to Low)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} sort={sort} />
      <Footer />
    </Container>
  );
};

export default ProductList;
