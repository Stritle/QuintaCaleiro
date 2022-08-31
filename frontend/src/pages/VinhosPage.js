import React, { useEffect } from "react";
import Navbar from "../componentes/Navbar";
import { Link } from "react-router-dom";
import { listVinhos } from "../actions/vinhoActions";
import { useDispatch, useSelector } from "react-redux";
import SmallFooter from "../componentes/SmallFooter";

function VinhosPage(props) {
  const vinhoList = useSelector((state) => state.vinhoList);
  const { vinhos, loading, error } = vinhoList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVinhos());
    return () => {};
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="loja">
      <Navbar />
      <h1>Os Vinhos Quinta do Caleiro</h1>
      <div className="content-loja">
        <ul className="vinho-ul">
          {vinhos.map((vinho) => (
            <li key={vinho._id}>
              <div className="vinho-item">
                <div className="vinhos-img">
                  <img src={vinho.image} alt="Garrafas Quinta do Caleiro"></img>
                </div>
                <div className="vinhos-qty">
                  <div>
                    <Link to={"details/" + vinho._id}> Comprar</Link>
                  </div>
                </div>
                <div className="vinhos-texto">
                  <h3>{vinho.nome}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <SmallFooter />
    </div>
  );
}
export default VinhosPage;
