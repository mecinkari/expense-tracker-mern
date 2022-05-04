import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

function Add() {

    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)

    const navigate = useNavigate()

    const buttonClick = () => {
        axios.post('http://localhost:4000/expenses/', {
            'name': name,
            'category': category,
            'date': new Date(),
            'amount': Number(amount)
        }).then(res => {
            console.log(res)
            navigate('/')
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='max-w-4xl mx-auto'>
            <section className='py-6'>
                <h1 className='text-5xl text-slate-600 font-thin text-center'>Add Expense</h1>
            </section>

            <section className='py-6'>
                <Link to={'/'} className='px-4 py-2 bg-slate-500 text-white rounded'>Back</Link>
            </section>

            <section className="py-6 max-w-md flex flex-col gap-y-6">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1">Name</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} id="name" className="p-2 rounded border-2 focus:outline-blue-500" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="category" className="mb-1">Category</label>
                    <select id="category" value={category} onChange={(e) => { setCategory(e.target.value) }} className="p-2 rounded border-2 focus:outline-blue-500">
                        <option value="">- Choose Category -</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="amount" className="mb-1">Amount</label>
                    <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} id="amount" className="p-2 rounded border-2 focus:outline-blue-500" />
                </div>

                <button onClick={buttonClick} className="py-2 px-4 text-white bg-green-500 rounded">Submit</button>
            </section>
        </div>
    )
}

export default Add
