import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-gray-50">

      {/* 🔥 Banner Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="rounded-xl overflow-hidden shadow">
          <img
            src="https://t3.ftcdn.net/jpg/03/14/28/96/360_F_314289607_ADADbnGr64dpGnddyhZPidCoc6jgKiHK.jpg"
            alt="Shopping Banner"
            className="w-full h-[320px] object-cover"
          />
        </div>

        {/* Optional credit */}
        <p className="text-xs text-gray-400 mt-2 text-center">
          {/* Photo by{" "} */}
          <a
            href="https://unsplash.com/@epicuros"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {/* Vasilis Caravitis */}
          </a>{" "}
          {/* on{" "}
          <a
            href="https://unsplash.com/photos/a-group-of-mannequins-on-a-stage-K8Vh0gwOrxA"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Unsplash
          </a> */}
        </p>
      </div>

      {/* 🔥 Shop by Category */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold mb-4">Shop by Category</h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 text-center">
          <Category name="Men" link="/category/men" />
          <Category name="Women" link="/category/women" />
          <Category name="Kids" link="/category/kids" />
          <Category name="Electronics" link="/category/electronics" />
          <Category name="Home & Kitchen" link="/category/home-kitchen" />
          <Category name="Beauty" link="/category/beauty" />
        </div>
      </div>

      {/* 🔥 Trending Products */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-xl font-bold mb-4">Trending Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

    </div>
  );
}

/* ---------- Category Card ---------- */
function Category({ name, link }) {
  return (
    <NavLink
      to={link}
      className="
        bg-white rounded-lg p-4 shadow
        hover:shadow-md hover:-translate-y-1
        transition text-sm font-medium
      "
    >
      {name}
    </NavLink>
  );
}

/* ---------- Product Card ---------- */
function ProductCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop"
        alt="Product"
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-2 font-medium">Stylish Product</h3>
      <p className="text-green-600 font-bold">₹ 999</p>
    </div>
  );
}
