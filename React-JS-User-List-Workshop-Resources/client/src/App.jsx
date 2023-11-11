import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import "./styles.css"
import UserList from "./components/UserList.jsx"
function App() {

  return (
    <div>
    <Header />
    <main className="main">
    <UserList />
  </main>

    <Footer />
    </div>
  )

}

export default App
