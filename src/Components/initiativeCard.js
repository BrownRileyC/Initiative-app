import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{props.initiative}</h6>
            </div>
        </div>
    )
};

export default Card