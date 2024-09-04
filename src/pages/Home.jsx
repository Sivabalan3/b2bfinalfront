import {CategoryList} from "./CategoryList"
import NavBar from "../components/Navbar"
import Products from "../components/Products"

const Home = () => {

  return (
    <>
    <NavBar name={"Hello Sai"} isHome={true}/>
    <Products />
    <CategoryList />
    </>
  )
}
export default Home