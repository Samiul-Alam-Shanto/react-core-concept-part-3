import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <h2>Products : {products.length}</h2>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Porduct</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
