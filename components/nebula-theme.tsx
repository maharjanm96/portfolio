const NebulaTheme = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 left-90 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl" />

      {/* middle portfolio */}
      <div className="absolute bottom-2/3 left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-2/3 left-80 w-50 h-50 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-2/3 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />

      {/* bottom corner */}
      <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -right-10 w-80 h-80 bg-red-500/30 rounded-full blur-3xl" />

      {/* middle */}
      <div className="absolute bottom-2/3 right-50 w-60 h-60 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute bottom-2/3 right-90 w-60 h-60 bg-blue-500/30 rounded-full blur-3xl" />
    </div>
  );
};

export default NebulaTheme;
