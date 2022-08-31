import React, { useEffect, useState } from 'react'
import Navbar from '../componentes/Navbar'
import Footer from '../componentes/Footer'
import { detailsVinhos } from '../actions/vinhoActions';
import { useDispatch, useSelector } from 'react-redux'
import { CgShoppingCart } from 'react-icons/cg';


const DetailsVinho = (props) => {

    const [qty, setQty] = useState(1);
    const vinhoDetails = useSelector(state => state.vinhoDetails);
    const { vinho, loading, error } = vinhoDetails;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(detailsVinhos(props.match.params.id));
        return () => {
            //
        };
    }, [])

    const handdleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return <div> {loading ? <div>Loading...</div> :
        error ? <div>{error}</div> :
            (<div className="details">
                <Navbar />
                <div className="details-container">
                    <div className="details-image">

                        <img src={vinho.image}></img>
                    </div>
                    <div className="details-description">
                        <h1>{vinho.nome}</h1>
                        <p>{vinho.desc}</p>

                    </div>
                    <div className="details-buttons">
                        <div className="details-qty">
                            <p>Quantidade: </p>
                            <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                {[...Array(vinho.stock).keys()].map(x =>
                                    <option value={x + 1}>{x + 1}</option>)}
                            </select>
                        </div>
                        <button onClick={handdleAddToCart}><CgShoppingCart /></button>
                        <div className="details-rating">
                            <p>Classificação: </p><h3>{vinho.rating}</h3>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>)
    }

    </div>
}






export default DetailsVinho
