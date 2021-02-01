import React from 'react';

const Other = () => {
    return (
        <div className="other">
            <div>Сортировка по: <span className="other__sort">популярности</span></div>
            <ul className="other__types">
                <li>популярности</li>
                <li>цене</li>
                <li>алфавиту</li>
            </ul>
        </div>
    )
}

export default Other;