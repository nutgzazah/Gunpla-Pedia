import React, { useState, useEffect } from 'react';
import Grades from '../../comp/grades/Grades';
import Topgunpla from '../topgunpla/Topgunpla';
import Newslide from '../../comp/newslider/Newslide';
import Gsearch from '../../comp/gsearch/Gsearch';
import Guidegrade from '../../comp/guidegrade/Guidegrade';
import Product from '../../comp/showgun/Product';
import Recommends from '../../comp/recommends/Recommends';
import { getdata } from '../../../functions/product';
import Card from '../../comp/showcom/Cards';

const Gunpla = () => {
  const [products, setProducts] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getdata();
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter((product) => 
    product.name.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  const handleChange = event => {
    setSelectedSeries(event.target.value);
  };

  const handleClick = event => {
    setSelectedSeries(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ serie, grade, name }) =>
          serie === selected ||
          grade === selected ||
          name === selected
      );
    }

    return filteredProducts.map(({ _id, file, name, totalrating, ratings }) => (
      <Card 
        key={_id}
        id={_id}
        img={`${process.env.REACT_APP_API}/uploads/${file}`}
        name={name}
        star={totalrating}
        totalrating={totalrating}
        ratings={ratings}
      />
    ));
  }

  const result = filteredData(products, selectedSeries, query);

  return (
    <div>
      <Topgunpla />
      <Newslide />
      <Grades />
      <Recommends />
      <Topgunpla />
      <Gsearch query={query} handleInputChange={handleInputChange} />
      <Guidegrade handleClick={handleClick} />
      <Product result={result} handleChange={handleChange} />
    </div>
  );
};

export default Gunpla;
