const StatusCard = ({ title, count, icon, iconColor, bgColor }) => {
  return (
    <>
      <div className="status-card-border-style">
        {/* Icon with Background */}
        {/* Title and Count */}
        <div className="status-card-style">
          <p className="status-card-title-style">{title}</p>
          <p className="status-card-count-style">{count}</p>
        </div>
        <div className="status-card-icon-style">
          <span className={`text-2xl ${iconColor}`}>{icon}</span>
          <div className={`status-card-dark-bg-style ${bgColor} `}></div>
        </div>
      </div>
    </>
  );
};

export default StatusCard;
