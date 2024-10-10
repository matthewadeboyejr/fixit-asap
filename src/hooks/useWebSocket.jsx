import { useCallback, useEffect, useRef, useState } from "react";

const useWebSocket = (id) => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const webSocketRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);

  const token = localStorage.getItem("accessToken");
  const url = `wss://artisanapi-48408c1be722.herokuapp.com/ws/chat/${id}/?token=${token}`;

  const connect = useCallback(() => {
    webSocketRef.current = new WebSocket(url);

    webSocketRef.current.onopen = () => {
      setIsConnected(true);

      console.log("WebSocket connected");
    };

    webSocketRef.current.onclose = (e) => {
      setIsConnected(false);
      console.log("WebSocket closed. Attempting to reconnect...", e.reason);
      reconnectTimeoutRef.current = setTimeout(connect, 3000);
    };

    webSocketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    webSocketRef.current.onmessage = (e) => {
      try {
        const message = JSON.parse(e.data);
        setMessages((prevMessages) => [...prevMessages, message]);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };
  }, [url]);

  useEffect(() => {
    connect();

    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connect, id]);

  const sendMessage = useCallback((message) => {
    if (
      webSocketRef.current &&
      webSocketRef.current.readyState === WebSocket.OPEN
    ) {
      webSocketRef.current.send(JSON.stringify(message));
    } else {
      console.warn("WebSocket is not connected. Message not sent.");
    }
  }, []);

  return { isConnected, messages, sendMessage };
};

export default useWebSocket;
