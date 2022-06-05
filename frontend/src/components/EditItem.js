import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const api = 'http://localhost:8000/api/item'

const EditItem = () => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [quantity, setQuantity] = useState(0)
  const navigate = useNavigate()
  const {id} = useParams()

  const update = async(e) => {
    e.preventDefault();
    await axios.put(`${api}/${id}`, {
      name: name,
      desc: description,
      quantity: quantity
    });
    navigate("/");
  }

  useEffect(() => {
    const getItemById = async() => {
      const response = await axios.get(`${api}/${id}`)
      setName(response.data.name)
      setDescription(response.data.desc)
      setQuantity(response.data.quantity)
    }

    getItemById()
  },[])

  return (
    <div>
      <h3>Eleman Düzenle</h3>
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center ">
          <div className="col-md-6">
          <form onSubmit={update}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" />
              </div>
              <div className="mb-3">
                <label className="form-label">Quantity</label>
                <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="number" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary">
                Kaydet
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditItem;
