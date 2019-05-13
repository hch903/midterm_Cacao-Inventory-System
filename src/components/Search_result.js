import React from 'react';

export default ({name}) => {
    return (
        <div className = "container">
            <h1>{name}</h1>
            <table className = "search_table" border = "1" frame = "above">
                <tr align = "center">
                    <td width = "10%">時間</td>
                    <td width = "10%">進貨／出貨</td>
                    <td>廠商</td>
                    <td width = "20%">數量</td>
                </tr>
                <tr>
                    <td>2019/4/10</td>
                    <td>進貨</td>
                    <td align = "center">abc.Inc</td>
                    <td align = "right">3000</td>
                </tr>
                <tr>
                    <td>2019/4/12</td>
                    <td>出貨</td>
                    <td align = "center">xyz.Inc</td>
                    <td align = "right">1000</td>
                </tr>
                <tr>
                    <td>2019/4/14</td>
                    <td>進貨</td>
                    <td align = "center">apple.Inc</td>
                    <td align = "right">10000</td>
                </tr>
                <tr>
                    <td colSpan = "2">Total</td>
                    <td colSpan = "2" align = "right">12000</td>
                </tr>
            </table>
        </div>
    );
}