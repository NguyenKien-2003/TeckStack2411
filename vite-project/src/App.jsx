  import './App.css'
  import Header from './components/Header'
  import Banner from './components/Banner'
  import Layout from './components/Layout';
import { useState } from 'react';

  function App() {
    // const Students = Array.from({ length: 20 }, (_, i) => ({
    //   id: i + 1,
    //   age: 14 + Math.floor(Math.random() * 3),
    //   name: `Văn ${String.fromCharCode(65 + i)}`,
    //   gender: Math.random() < 0.5 ? "male" : "female",
    //   score: Math.floor(Math.random() * 51) + 50,
    // }));

    //const filterStudent = Students.filter(student => student.gender === "female" && student.score % 2 ===0)

    return (
      <>
        <Header/>
        <Banner/>
        <Layout>
        {/* {filterStudent.map((student, idx) => (
          <div key={student.id}>
            <div>=========== Học sinh {idx + 1} =============</div>
            <div>ID:{student.id}</div>
            <div>Tuổi:{student.age}</div>
            <div>Họ và tên:{student.name}</div>
            <div>Gender: {student.gender}</div>
            <div>Score: {student.score}</div>
          </div>
        ))} */}
      </Layout>
      <Counter />
      <Counter />
      <Counter />
      </>
    )
  }

  export default App
const Counter = () =>{
  const [count, setCount] = useState(0);
  const handleIncrease  = () =>{
    setCount(count+1)
  };
  return(
    <>
    {count}
    <button onClick={handleIncrease}>Tang gia tri</button>
    </>
  )
}