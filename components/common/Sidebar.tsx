const Sidebar = () => {
  const items = [
    { label: "Wallet" },
    { label: "Gems" },
    { label: "Profile" },
  ];

  return (
    <aside className="lg:flex flex-col items-center gap-3 pt-3 lg:w-34 hidden min-h-full bg-linear-to-b to-[#0098FF] from-[#00233B] shrink-0 p-2 ">
      {items.map(({ label }) => (
        <button
          key={label}
          aria-label={label}
          className="w-full py-1   rounded-full bg-zinc-900/50 hover:bg-zinc-400 transition-colors shrink-0"
          title={label}
        >
         {label}
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
