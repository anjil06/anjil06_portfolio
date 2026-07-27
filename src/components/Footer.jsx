import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center py-10 border-t border-slate-800">

      <p>
        Made with <FaHeart className="inline text-red-500" /> by
      </p>

      <h3 className="text-xl font-bold mt-2">
        M Anjil Reddy
      </h3>

      <p className="text-gray-500 mt-3">
        © 2026 All Rights Reserved.
      </p>

    </footer>
  );
}