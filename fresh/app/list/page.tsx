'use client';

import React, { useState } from 'react';

export default function Page() {
  // 상태 배열을 초기화
  const [count, setCount] = useState<number[]>(Array(3).fill(0));
  const products = ['Tomato', 'Pasta', 'Coconut'];

  const handleClick = (index: number) => {
    setCount(prevCount => {
      // 이전 상태를 복사
      const newCount = [...prevCount];
      // 클릭된 인덱스의 수량을 증가
      newCount[index]++;
      return newCount;
    });
  };

  return (
    <div>
      <h4 className="title">상품목록</h4>
      {
        products.map((item, index) => (
          <div className="food" key={index}>
            <img src={`/img/food${index}.png`} className="food-img" alt={item} />
            <h4>{item} $40</h4>
            <span> {count[index]} </span>
            <button onClick={() => handleClick(index)}> + </button>
          </div>
        ))
      }
    </div>
  );
}
