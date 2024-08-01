import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts(); // 컴포넌트가 마운트될 때 상품 데이터를 가져오는 함수 호출
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const fetchProducts = async () => {
    try {
      const res = await axios.get('/products'); // 백엔드 API 엔드포인트 설정에 따라 변경해야 합니다.
      setProducts(res.data); // 상품 데이터 설정
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="App">
      <h1>상품 목록</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.goods_id} className="product-item">
            <h3>{product.goods_name}</h3>
            <p>가격: {product.goods_price}원</p>
            <img src={product.goods_image} alt={product.goods_name} style={{ maxWidth: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
