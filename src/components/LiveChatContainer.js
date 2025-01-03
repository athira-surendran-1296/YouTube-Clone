import { USER_ICON } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { generateRandomId, generateRandomMessage, getRandomName } from '../utils/helper';
import { addChat } from '../utils/store/slice/chatSlice';
import { useEffect, useState } from 'react';

const Chat = ({username, message}) => {
  return(
        <div className='flex items-center gap-1 shadow-sm p-1 px-0'>
            <img src={USER_ICON} alt="User Icon" className="w-5 h-5" />
            <div className="flex gap-2">
                <h4 className="font-bold text-xs">{username}</h4>
                <p className="text-xs">{message}</p>
            </div>
        </div>)
}

const LiveChatContainer = () => {
  const [liveChat, setLiveChat] = useState('');
  const dispatch = useDispatch();
  const liveChatData = useSelector(store => store.chat.chatData);

  const handleSendChat = (e) => {

    const message = {
      id: generateRandomId(),
      username: 'Athira',
      message: liveChat
    };

    dispatch(addChat(message));
    
    setLiveChat('');
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling

      const message = {
        id: generateRandomId(),
        username: getRandomName(),
        message: generateRandomMessage()
      };

      dispatch(addChat(message));

    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-2 border-blue-300 bg-blue-100 rounded-lg'>
      <div>
        <h1 className='text-md font-bold mb-2'>Live Chat</h1>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col-reverse overflow-y-auto h-96'>
            {liveChatData.map(chat => <Chat key={chat.id} username={chat.username} message={chat.message}/>)} 
          </div>
          <div className='flex gap-2'>
            <input type='text' placeholder='Type a message' className='flex-1 p-2 border border-gray-300 rounded-lg' value={liveChat} onChange={(e) => setLiveChat(e.target.value)}/>
            <button className='bg-blue-400 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg' onClick={handleSendChat}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveChatContainer;