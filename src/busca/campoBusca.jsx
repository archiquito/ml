import React, { Component } from 'react';

class CampoBusca extends Component {
    render() {
        return ( 
            <div className="bgTop">
                <div className="container">
                    <div className="row">
                    <div className="col-md-1">
                    <a className="nav-logo" href="//www.mercadolivre.com.br/" title="Mercado Livre Brasil - Onde comprar e vender de Tudo"></a>
                    </div>
                    <div className = "col-md-10" ><br/>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Buscar produtos, marcas e muito mais..." aria-describedby="button-addon2"/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary nav-icon-search" type="button" id="button-addon2"></button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default CampoBusca;