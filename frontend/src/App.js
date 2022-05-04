import { React } from 'react'
import './output.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './view/Home';
import Add from './view/Add';

function App() {
  // const [expenses, setExpense] = useState([])

  // useEffect(() => {
  //   axios.get('http://localhost:4000/expenses')
  //     .then(res => {
  //       setExpense(res.data)
  //     })
  // }, [])

  return (
    <Router>
      <div className='min-h-screen w-full bg-white'>
        {/* <nav className='bg-white flex w-full'>
          <Link to={'/'}>Home</Link>
        </nav> */}

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/add' exact element={<Add />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
