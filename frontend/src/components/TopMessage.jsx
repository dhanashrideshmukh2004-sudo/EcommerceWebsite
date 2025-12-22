export default function TopMessage({ show, text }) {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-green-600 text-white
                    text-center py-3 font-semibold z-[9999] shadow">
      {text}
    </div>
  );
}
