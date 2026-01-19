import React from "react";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-2xl font-semibold text-gray-700">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-500">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-200 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
