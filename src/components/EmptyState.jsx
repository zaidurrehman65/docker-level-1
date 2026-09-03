function EmptyState({ illustration, message }) {
  return (
    <div className="empty-state-rich">
      {illustration}
      <p>{message}</p>
    </div>
  );
}

export default EmptyState;
