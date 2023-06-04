import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ZoneForm = ({ onZoneAdded }) => {
    const [nom, setNom] = useState("");
    const [cityId, setCityId] = useState("");
    const [villes, setVilles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/villes").then((response) => {
            setVilles(response.data);
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api/zone/save", {
            nom,
            ville: {
                id: cityId
            }
        }).then((response) => {
            //onZoneAdded(response.data);
            setNom("");
            setCityId("");
        });
        navigate("/zone");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={nom}
                    onChange={(event) => setNom(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="cityId">City:</label>
                <select
                    className="form-control"
                    id="cityId"
                    value={cityId}
                    onChange={(event) => setCityId(event.target.value)}
                >
                    <option value="">Select a city </option>
                    {villes && villes.map((ville) => (
                        <option key={ville.id} value={ville.id}>
                            {ville.nom}
                        </option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">
                Add Zone
            </button>
        </form>
    );
}
  

export default ZoneForm