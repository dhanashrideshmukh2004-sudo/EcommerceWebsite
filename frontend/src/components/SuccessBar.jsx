export default function SuccessBar({ message, show }) {
  if (!show) return null;

  return (
    <div className="fixed top-0 left-0 w-full bg-green-600 text-white
                    text-center py-3 font-semibold z-[99999] shadow-md">
      {message}
    </div>
  );
}
