import Link from "next/link";


function Footer() {
    return (
      <footer className="bg-pink-50 text-center py-6 font-ubuntu text-sm text-gray-600">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Wafoulashes. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="#prestations" className="hover:text-pink-600 transition">Prestations</Link>
            <Link href="#reserver" className="hover:text-pink-600 transition">Réserver</Link>
            <Link href="#contact" className="hover:text-pink-600 transition">Contact</Link>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  