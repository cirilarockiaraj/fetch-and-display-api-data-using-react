import React from "react";

const Card = ({user}) => {
  return (
    <div className="card">
      <div className="header">
        <h3>{user.name}</h3>
      </div>
      <div className="content">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
        <p>
          <strong>Company:</strong> user.company.name
        </p>
      </div>
    </div>
  );
};

export default Card;
