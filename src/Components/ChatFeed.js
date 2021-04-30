import React from 'react'
import MessageForm from './MessageForm'
import MyMessage from './MyMessage'
import TheirMessage from './TheirMessage'

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages} = props
  //If chats exist find the active chat and set it to chat
  const chat = chats && chats[activeChat]

  const renderReadReceipts = (message, isMyMessage) => {
    chat.people.map((person, index) => person.lastl_read === message.id && (
      <div key={`read_${index}`}
      className='read-receipt'
      style={{ 
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: `url(${person.person.avatar})`
      }}
      />
    )
    )}

  const renderMessages = () => {
    //fetch all messages 
    const keys = Object.keys(messages)

    // console.log(keys)
    // render messages 
    return keys.map((key, index) => {
      //map callback funcntion takes key and index of message
      //equals one specific message with that key
      const message = messages[key] 

      //check if index = 0 then return nll else return keys ad index -1. basically if messages exist find the last message
      const lastMessageKey = index === 0 ? null : keys[index - 1] 

      // checl if username is === message senders username
      const isMyMessage = userName === message.sender.username

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {
              //if is my message display my message else display their message
              isMyMessage 
              ? <MyMessage message={message}/> 
              : <TheirMessage message={message} lastMessage={message[lastMessageKey]}/>
              
            }
          </div>                             
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
            
              {renderReadReceipts(message, isMyMessage)}
            
          </div>
        </div>
      )
    })
  }
  renderMessages()
  //if no chat render loading
  if(!chat) return 'Loading...'

  return (
    <div className='chat-feed'>
      <div className='chat-title-container'>
        <div className='chat-title'> {/* Shows Chat Title */chat.title}</div>
          <div className='chat-subtitle'>
            {/* Map thru chat prop and get usernames */chat.people.map((person) => ` ${person.person.username}`)}
          </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }}/>
      <div className='message-form-container'>
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  )
}

export default ChatFeed