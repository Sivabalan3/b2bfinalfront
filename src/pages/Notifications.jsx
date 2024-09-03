import NavBar from "../components/Navbar"

const Notifications = () => {
  return (
    <>
    <NavBar name={"Notifications"} back={"home"}/>
    <div className="mt-16 p-5 font-bold text-xl"> 
       <h1 className="text-center text-gray-800"> No Notifications!!</h1>
        </div>
    </>
  )
}
export default Notifications