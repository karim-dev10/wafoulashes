import { FaInstagram, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";

function SocialBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-6 bg-white px-6 py-3 rounded-full shadow-lg md:hidden">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="text-pink-600 text-xl hover:scale-110 transition"
      >
        <FaInstagram />
      </a>
      <a
        href="https://snapchat.com"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-500 text-xl hover:scale-110 transition"
      >
        <FaSnapchatGhost />
      </a>
      <a
        href="https://wa.me/33600000000"
        target="_blank"
        rel="noreferrer"
        className="text-green-500 text-xl hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default SocialBar;
