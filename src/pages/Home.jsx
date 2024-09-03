import Categories from "../components/Categories"
import NavBar from "../components/Navbar"
import Products from "../components/Products"

const Home = () => {

  return (
    <>
    <NavBar name={"Hello Sai"} isHome={true}/>
    <Products />
    <Categories />
    </>
  )
}
export default Home