import "./StatusMessage.scss";

type StatusMessageProps = {
  isOnline: boolean;
  lastSeen?: string; // ? betyder att prop är valfri
};

const StatusMessage = ({ isOnline, lastSeen }: StatusMessageProps) => {
  return (
    <div>
      <p className={isOnline ? "online" : "offline"}>
        {isOnline ? "✅ User is online" : "❌ User is offline"}
      </p>
      {!isOnline && lastSeen && <p>Last seen: {lastSeen}</p>}
    </div>
  );
};

export default StatusMessage;
