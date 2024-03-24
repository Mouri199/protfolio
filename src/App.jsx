
import Entice from './Projects/Entice'
import Travel from './Projects/Travel'
import Blood from './Projects/Blood'
import Wedding from './Projects/Wedding'


function App() {

  return (
    <>
      <div className=" lg:ml-[480px] lg:mx-24 mx-3">
        <div>
          <h3 className="lg:text-5xl text-3xl font-play font-medium text-[#DAFFFB]">My Projects</h3>
          <p className="my-5 lg:text-xl text-[#DAFFFB]">These are the projects I've completed, and they're my best ones yet. You can check out the details by hovering over the images.</p>
        </div>

        <Entice></Entice>

        <Travel></Travel>

        <Blood></Blood>
      
        <Wedding></Wedding>


      </div>
    </>
  )
}

export default App
