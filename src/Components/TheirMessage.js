import React from 'react'

const TheirMessage = ({ message, lastMessage}) => {
   //check if the message is the first message by the user.
  // if message is not last message or if last message username is not the same as the sender
  const isFirstMEssageByUSer = !lastMessage || lastMessage.sender.username !== message.sender.username
  return (
    <div className='message-row'>
      {
          isFirstMEssageByUSer && (
          <div 
          className='message-avatar'
          style={{backgroundImage: `url(${message.sender.avatar})`}}   
          />
        )
      }
      {
        message?.attachments?.length > 0
        ? (
            <img src={message.attachments[0].file} 
            alt='message-attachment' 
            className='message-image' s
            tyle={{ marginLeft: isFirstMEssageByUSer ? '4px' : '48px'}}/>
          ) : (
            <div className='message' 
            style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMEssageByUSer ? '4px' : '48px' }}>
            {message.text}
            </div>
        )
      }
      
    </div>
  )
}

export default TheirMessage