import { useCallback, useEffect, useRef, useState } from "react";

const useWebSocket = (id) => {
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const webSocketRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const messageHandlerRef = useRef(null);

  const token = localStorage.getItem("accessToken");
  const url = `wss://api.service-rendering.co.uk/ws/chat/${id}/?token=${token}`;

  const connect = useCallback(() => {
    if (webSocketRef.current) {
      webSocketRef.current.onopen = null;
      webSocketRef.current.onclose = null;
      webSocketRef.current.onerror = null;
      webSocketRef.current.onmessage = null;
      if (webSocketRef.current.readyState === WebSocket.OPEN) {
        webSocketRef.current.close();
      }
    }

    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }

    webSocketRef.current = new WebSocket(url);

    webSocketRef.current.onopen = () => {
      setIsConnected(true);
      console.log("WebSocket connected");
    };

    webSocketRef.current.onclose = (e) => {
      setIsConnected(false);
      console.log("WebSocket closed. Attempting to reconnect...", e.reason);
      if (!reconnectTimeoutRef.current) {
        reconnectTimeoutRef.current = setTimeout(connect, 3000);
      }
    };

    webSocketRef.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    messageHandlerRef.current = (e) => {
      try {
        const message = JSON.parse(e.data);
        setMessages((prevMessages) => [...prevMessages, message]);
      } catch (error) {
        console.error("Error parsing message:", error);
      }
    };

    webSocketRef.current.onmessage = messageHandlerRef.current;
  }, [url]);

  useEffect(() => {
    connect();

    return () => {
      if (webSocketRef.current) {
        webSocketRef.current.onmessage = null;
        webSocketRef.current.close();
      }
      if (reconnectTimeoutRef.current) {
        clearTimeout(reconnectTimeoutRef.current);
      }
    };
  }, [connect, id]);

  const sendMessage = useCallback((message) => {
    if (webSocketRef.current?.readyState === WebSocket.OPEN) {
      webSocketRef.current.send(JSON.stringify(message));
      return true;
    }
    console.warn("WebSocket is not connected. Message not sent.");
    return false;
  }, []);

  return { isConnected, messages, sendMessage };
};

export default useWebSocket;
