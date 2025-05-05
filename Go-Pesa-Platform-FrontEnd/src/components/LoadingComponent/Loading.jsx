// filepath: /src/components/Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="loader border-t-4 border-white w-12 h-12 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;