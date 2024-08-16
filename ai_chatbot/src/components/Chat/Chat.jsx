import "./Chat.css";
const Chat = () => {
  return (
    <>
      <div className="Chat-container">
        <div className="Chat-window">
          <p>GPT Container</p>
        </div>
        <div>
          <input type="text" placeholder="Enter your question." />
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Chat;
