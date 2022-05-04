import React from "react";
import axios from "axios";

function Card(props) {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let date = new Date(props.data.date);
    let id = props.data.id;
    let name = props.data.name;
    let amount = props.data.amount.toLocaleString("id-ID");
    let category = props.data.category;
    let finalDate = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;

    const clickDelete = () => {
        axios.delete(`http://localhost:4000/expenses/${id}`)
            .then(() => {
                window.location.reload()
            })
    }

    return (
        <div className={`w-full block p-4 bg-white shadow-lg rounded border-l-4 ${category === 'income' ? 'border-green-500' : 'border-red-500'}`}>
            <div className='grid grid-cols-2'>
                <p className="text-xl font-bold">{name}</p>
                <p className="text-4xl font-thin text-right">Rp {amount}</p>
            </div>
            <p className="font-bold text-slate-500 text-right my-4">{finalDate}</p>
            {/* <p className={`font-bold ${category === 'income' ? 'text-green-500' : 'text-red-500'}`}>{category}</p> */}
            <button onClick={clickDelete} className='py-1 px-2 bg-red-500 text-white mt-3 inline-block rounded'>Delete</button>
        </div>
    )
}

export default Card