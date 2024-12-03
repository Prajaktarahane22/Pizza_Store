import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PizzaList() {
  const [Pizza, setPizaa] = useState([]);
  const navigate = useNavigate(); // Correctly call useNavigate to get the navigate function

  useEffect(() => {
    fetchPizza();
  }, []);

  const fetchPizza = () => {
    axios.get('http://localhost:7000/pizza')
      .then(response => {
        setPizaa(response.data);
      })
      .catch(error => {
        console.log('There was an error fetching the pizza data!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:7000/pizza/${id}`)
      .then(() => {
        fetchPizza();
      })
      .catch(error => {
        console.log('There was an error deleting the pizza data!', error);
      });
  };

  return (
    <div className="container mt-4">
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Pizza List</h2>
      <div className="row">
        {Pizza.map(pizza => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <div className="card h-100 shadow-sm" style={{ border: '1px solid #ddd', borderRadius: '0.25rem' }}>
              <img 
                src={pizza.image} 
                className="card-img-top" 
                alt={pizza.name} 
                style={{ objectFit: 'cover', height: '200px', borderTopLeftRadius: '0.25rem', borderTopRightRadius: '0.25rem' }} 
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{pizza.name}</h5>
                <p className="card-text" style={{ flex: '1' }}>{pizza.description}</p>
                <div>
                  <button 
                    className="btn btn-warning me-2" 
                    onClick={() => navigate(`/update-pizza/${pizza.id}`)}
                    style={{ marginRight: '0.5rem' }}
                  >
                    Update
                  </button>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => handleDelete(pizza.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PizzaList;
