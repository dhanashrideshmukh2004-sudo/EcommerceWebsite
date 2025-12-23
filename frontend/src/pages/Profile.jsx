import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  // 🔐 If not logged in
  if (!user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-4">
          Login to view your profile
        </h2>
        {/* <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg"
        >
          Go to Login
        </button> */}
      </div>
    );
  }

  // ✅ USER-WISE ADDRESS FETCH
  const address = JSON.parse(
    localStorage.getItem(`address_${user.email}`)
  );

  // 🚪 Logout
  const logout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("isLogin");
    navigate("/login");
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {/* ================= PROFILE CARD ================= */}
      <div className="bg-white shadow rounded-xl p-6 flex gap-6 items-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
          alt="user"
          className="w-24 h-24 rounded-full"
        />

        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>

      {/* ================= ACTION CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        <ProfileCard
          title="My Orders"
          emoji="📦"
          onClick={() => navigate("/orders")}
        />
        <ProfileCard
          title="Wishlist"
          emoji="❤️"
          onClick={() => navigate("/wishlist")}
        />
        <ProfileCard
          title="Saved Addresses"
          emoji="🏠"
          onClick={() => navigate("/address")}
        />
      </div>

      {/* ================= SAVED ADDRESS DISPLAY ================= */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-4">Saved Address</h3>

        {!address ? (
          <p className="text-gray-500">
            No address saved for this account
          </p>
        ) : (
          <div className="bg-white shadow rounded-lg p-5">
            <p className="font-semibold">{address.name}</p>
            <p>{address.street}</p>
            <p>
              {address.city}, {address.state} - {address.pincode}
            </p>
            <p className="text-gray-600">📞 {address.phone}</p>
          </div>
        )}
      </div>

      {/* ================= LOGOUT ================= */}
      <div className="mt-10">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

function ProfileCard({ title, emoji, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow rounded-lg p-5 text-lg font-medium cursor-pointer hover:bg-gray-50 flex items-center gap-2"
    >
      <span>{emoji}</span>
      <span>{title}</span>
    </div>
  );
}