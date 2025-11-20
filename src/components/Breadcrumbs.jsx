import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((path) => path !== "")
    .map((crumb, idx, arr) => {
      currentLink += `/${crumb}`;

      // Capitalize first letter
      const label = crumb.charAt(0).toUpperCase() + crumb.slice(1);

      const isLast = idx === arr.length - 1;

      return (
        <div key={idx} className="flex items-center gap-1">
          {!isLast ? (
            <Link
              to={currentLink}
              className="text-blue-600 hover:underline font-medium"
            >
              {label}
            </Link>
          ) : (
            <span className="text-gray-700 font-semibold">{label}</span>
          )}
          {!isLast && <span className="text-gray-500">/</span>}
        </div>
      );
    });

  return (
    <div className="flex gap-2 p-3 bg-gray-100 rounded-md shadow-sm w-fit">
      <Link to="/" className="text-blue-600 hover:underline font-medium">
        Home
      </Link>
      {crumbs.length > 0 && <span className="text-gray-500">/</span>}
      {crumbs}
    </div>
  );
};

export default Breadcrumbs;
