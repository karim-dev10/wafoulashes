import Link from "next/link";
import { FaInstagram, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";

type Props = {
  className?: string
}

function SocialBar({className}: Props) {
  return (
    <div className={className || "fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex justify-center items-center gap-6 bg-white px-6 py-3 rounded-full shadow-lg md:hidden"}>
      <Link
        href="https://www.instagram.com/wafouaesthetic"
        target="_blank"
        rel="noreferrer"
        className="text-pink-600 text-xl hover:scale-110 transition"
      >
        <FaInstagram />
      </Link>
      <Link
        href="https://www.snapchat.com/add/wafou_t"
        target="_blank"
        rel="noreferrer"
        className="text-yellow-500 text-xl hover:scale-110 transition"
      >
        <FaSnapchatGhost />
      </Link>
      <Link
        href="https://wa.me/33698403669"
        target="_blank"
        rel="noreferrer"
        className="text-green-500 text-xl hover:scale-110 transition"
      >
        <FaWhatsapp />
      </Link>
    </div>
  );
}

export default SocialBar;
