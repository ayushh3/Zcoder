import React, { useState, useEffect, useRef } from 'react';

const ChatRoom = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const ws = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        // Initialize WebSocket connection
        initWebSocket();

        // Clean up WebSocket connection on unmount
        return () => {
            if (ws.current) {
                ws.current.onerror = null;
                ws.current.onopen = null;
                ws.current.onclose = null;
                ws.current.close();
            }
        };
    }, []);

    useEffect(() => {
        // Fetch messages from backend
        fetchMessages();
    }, []);

    const initWebSocket = () => {
        ws.current = new WebSocket('ws://localhost:6969');

        ws.current.onopen = () => {
            console.log('Connection opened!');
        };

        ws.current.onmessage = async ({ data }) => {
            if (data instanceof Blob) {
                const text = await data.text();
                addMessage(text);
            } else {
                addMessage(data);
            }
        };

        ws.current.onclose = () => {
            ws.current = null;
        };
    };

    const fetchMessages = async () => {
        try {
            const response = await fetch('http://localhost:80/api/chatRoom');
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();
            const processedMessages = await Promise.all(
                data.messages.map(async (msg) => (msg instanceof Blob ? await msg.text() : msg))
            );
            setMessages(processedMessages);
        } catch (error) {
            console.error('Error fetching messages:', error.message);
        }
    };

    const sendMessage = () => {
        if (!ws.current) {
            addMessage("No WebSocket connection :(");
            return;
        }

        ws.current.send(newMessage);
        addMessage(newMessage);
        setNewMessage('');
    };

    const addMessage = (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        scrollToBottom();
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    return (
        <div>
            <h1>Real Time Messaging</h1>
            <pre id="messages" style={{ height: '400px', overflow: 'scroll' }}>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
                <div ref={messagesEndRef} />
            </pre>
            <input
                type="text"
                id="messageBox"
                placeholder="Type your message here"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '10px' }}
            />
            <button
                id="send"
                title="Send Message!"
                onClick={sendMessage}
                style={{ width: '100%', height: '30px' }}
            >
                Send Message
            </button>
        </div>
    );
};

export default ChatRoom;


