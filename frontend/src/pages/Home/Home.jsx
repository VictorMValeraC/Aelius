import Sidebar from '../../components/Sidebar/Sidebar'
import Chat from '../../components/Chat/Chat'
import TaskPanel from '../../components/TaskPanel/TaskPanel'

function Home() {
  return (
    <main className="home-layout">
      <Sidebar />
      <Chat />
      <TaskPanel />
    </main>
  )
}

export default Home