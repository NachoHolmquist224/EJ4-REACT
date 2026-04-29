import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import FormularioTarea from "./components/FormularioTarea"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main className="container my-3">
        <h1 className="text-center">Lista de tareas</h1>
        <FormularioTarea></FormularioTarea>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
