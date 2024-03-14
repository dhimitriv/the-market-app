function Button({ onClick, children }) {
  return (
    <button
      className="bg-blue-700 py-1 px-3 rounded text-white font-sans"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
