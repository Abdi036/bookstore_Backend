export default function Popup({ children }) {
  return (
    <div className="fixed bottom-4 left-4 bg-green-400 text-white p-4 rounded shadow-lg">
      {children}
    </div>
  );
}
