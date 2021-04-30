import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed'
import LoginForm from './Components/LoginForm'
import './App.css'

const App = () => {
  if(!localStorage.getItem('username')) return <LoginForm />
  return (
    <ChatEngine 
        // height of project
        height='100vh'
        // project id is string recieved from chatengine.io new project
        projectID='3f6eb1d4-154c-4641-b396-3339ca7218fd'
        //username of currently logged in user
        userName={localStorage.getItem('username')}
        //userSecret aka password
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App