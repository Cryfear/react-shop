import React from 'react';

const Other = () => {
    return (
        <div className="other">
            <div>Сортировка по: <span className="other__sort">популярности</span></div>
            <ul className="other__types">
                <li>по популярности</li>
                <li>по цене</li>
                <li>по алфавиту</li>
            </ul>
        </div>
    )
}

export default Other;