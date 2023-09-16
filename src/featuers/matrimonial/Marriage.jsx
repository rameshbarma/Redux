import React, { useEffect, useState } from "react";

const Marriage = () => {
  const [marriage, setMarriage] = useState([]);
  useEffect(() => {
    fetchPesrons();
  }, []);
  const fetchPesrons = async () => {
    try {
      const response = await fetch("http://localhost:3004/persons");
      const data = await response.json();
      console.log(data);
      setMarriage(data);
    } catch (error) {}
  };

  return (
    <div>
      <h1>Marriage</h1>
      <ul>
        {marriage.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Marriage;
