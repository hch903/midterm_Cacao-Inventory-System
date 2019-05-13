import React from 'react';

export default ({name}) => {
    return (
        <div className = "container">
            <h1>{name}</h1>
            <div className = "input_container">
                <form className = "form">
                    <h4>日期：<input type = "text" placeholder = "請輸入日期"></input></h4>
                    <h4>數量：<input type = "text" placeholder = "請輸入數量"></input></h4>
                    <h4>價格：<input type = "text" placeholder = "請輸入價格"></input></h4>
                    <h4>廠商：<input type = "text" placeholder = "請輸入廠商"></input></h4>
                    <h4>進/出貨：<select>
                        <option value = "進貨">進貨</option>
                        <option value = "出貨">出貨</option>
                    </select></h4>
                </form>
                <button className = "submit">送出</button>
            </div>
        </div>
    )
}