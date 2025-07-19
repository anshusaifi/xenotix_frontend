export function Button({ children, className = '', ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl bg-gradient-to-r from-purple-700 to-blue-500 text-white hover:scale-105 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
