import { React, useEffect, useState } from 'react'
import Card from '../components/Card';
import axios from "axios"
import { Link } from "react-router-dom"

function Home() {
    const [expenses, setExpense] = useState([])
    const [incomes, setIncome] = useState([])

    let totalIncome = incomes.reduce((n, { amount }) => n + amount, 0)
    let totalExpense = expenses.reduce((n, { amount }) => n + amount, 0)
    let totalBudget = totalIncome - totalExpense

    useEffect(() => {
        axios.get('http://localhost:4000/expenses?category=expense')
            .then((response) => {
                setExpense(response.data)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/expenses?category=income')
            .then((response) => {
                setIncome(response.data)
            })
    }, [])

    return (
        <div className='max-w-4xl flex flex-col mx-auto'>
            <section className='py-6'>
                <h1 className='text-5xl text-slate-600 font-thin text-center'>Expense Tracker</h1>
            </section>

            <section className='py-6'>
                <p className='text-center text-2xl'>My Budget: Rp {totalBudget.toLocaleString('id-ID')}</p>
            </section>

            <section className='py-6'>
                <Link to={'/add'} className='px-4 py-2 bg-green-500 text-white rounded'>Add New Item</Link>
            </section>

            <section className='py-6'>
                <div className='flex flex-row gap-x-4'>
                    <div className='w-full flex flex-col gap-y-4'>
                        {incomes.map((income, index) => {
                            return (
                                <Card key={index} data={income} />
                            )
                        })}
                    </div>

                    <div className='w-full flex flex-col gap-y-4'>
                        {expenses.map((expense, index) => {
                            return (
                                <Card key={index} data={expense} />
                            )
                        })}
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home