const chats = [
  'OKLCH Login Button',
  'Product Card with Dark Mode',
  'Elegant Search Input',
  'Simple Responsive Navbar',
  'Footer with Social Links',
];

export const SimulatedChatList = () => {
  return (
    <div className="flex-1 overflow-y-auto p-3 space-y-1">
      <h2 className="text-sm font-bold text-muted-foreground py-2 px-2">Your chats</h2>
      {chats.map((chat, index) => (
        <div
          key={index}
          className="flex items-center space-x-3 p-2 rounded-md text-card-foreground cursor-pointer transition-colors hover:bg-secondary"
        >
          <span className="text-sm truncate">{chat}</span>
        </div>
      ))}
      {chats.length === 0 && <p className="text-sm text-muted-foreground p-2">No recent chats.</p>}
    </div>
  );
};
