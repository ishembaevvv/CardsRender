import React from 'react';
import scss from './Cards.module.scss';

export default function Cards({index, color}) {
    return (
        <div className={scss.container}>
            <div style={{background: color, boxShadow: `0px 5px 89px 2px ${color}`}} className={scss.Cards}>
                <h2>{index}</h2>
            </div>
        </div>
    )
}
