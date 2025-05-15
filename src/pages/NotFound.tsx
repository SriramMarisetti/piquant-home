
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Menu item not found</p>
        <Link to="/" className="btn-primary">
          Return to Menu
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
