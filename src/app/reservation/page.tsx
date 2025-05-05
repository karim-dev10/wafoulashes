'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import CalendarSlider from './Calendar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SocialBar from '../components/SocialBar';

const fakeSlots = ['10:00', '11:00', '14:00', '15:00', '16:00'];

export default function ReservationPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const [firstname, setfirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [prestation, setPrestation] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirm = async () => {
    setErrorMessage('');

    if (!firstname || !lastname || !phone || !email) {
      setErrorMessage('Tous les champs sont obligatoires.');
      return;
    }

    const phoneRegex = /^0[1-9]\d{8}$/;
    if (!phoneRegex.test(phone)) {
      setErrorMessage('Numéro de téléphone invalide.');
      return;
    }

    if (selectedDate && selectedSlot) {
      try {
        const response = await fetch('/api/reservation', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstname,
            lastname,
            phone,
            email,
            date: selectedDate.toLocaleDateString('fr-CA'),
            hour: selectedSlot,
            prestation,
          }),
        });

        const result = await response.json();
        if (result.success) setConfirmed(true);
        else setErrorMessage(result.error || 'Erreur lors de la réservation.');
      } catch (err) {
        console.error(err);
        setErrorMessage('Une erreur est survenue. Veuillez réessayer plus tard.');
      }
    }

    if (!prestation) {
      setErrorMessage('Veuillez choisir une prestation.');
      return;
    }
  };

  return (
    <>
      <Navbar />
      <section className="px-4 py-25" data-aos="zoom-in">
        <div className="p-4 max-w-xl mx-auto text-neutral-800">
          <h1 className=" text-2xl md:text-3xl font-bold mb-6 text-center font-ubuntu tracking-wide">Réserver une prestation</h1>

          <CalendarSlider
            onSelectDate={(date) => {
              setSelectedDate(date);
              setSelectedSlot(null);
              setConfirmed(false);
            }}
            onSelectSlot={(slot) => {
              setSelectedSlot(slot);
              setConfirmed(false);
            }}
          />

          {selectedDate && (
            <>
              <div data-aos="zoom-in" className="mt-6">
                <h2 className="text-lg font-semibold mb-2">
                  Créneaux pour le {selectedDate.toLocaleDateString('fr-FR')} :
                </h2>
                <div className="flex flex-col gap-4 text-xl">
                  {fakeSlots.map((slot, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedSlot(slot);
                        setConfirmed(false);
                      }}
                      className={`p-2 border rounded-lg transition ${
                        selectedSlot === slot
                          ? 'bg-neutral-100/90 text-white'
                          : 'bg-pink-500 hover:bg-pink-600 text-white'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {selectedSlot && (
                <div data-aos="zoom-in" className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
                  <div className="font-ubuntu w-full max-w-md bg-white p-7 rounded-3xl shadow-xl border border-pink-400 space-y-3">
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-bold text-pink-700">Confirmation</h2>
                      <button onClick={() => setSelectedSlot(null)} className="text-xl">❌</button>
                    </div>

                    <input
                      type="text"
                      placeholder="Prénom"
                      value={firstname}
                      onChange={(e) => setfirstname(e.target.value)}
                      className="w-full border border-pink-300 p-3 rounded-xl bg-pink-50 placeholder-pink-700 text-sm"
                    />
                    <input
                      type="text"
                      placeholder="Nom"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      className="w-full border border-pink-300 p-3 rounded-xl bg-pink-50 placeholder-pink-700 text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-pink-300 p-3 rounded-xl bg-pink-50 placeholder-pink-700 text-sm"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full border border-pink-300 p-3 rounded-xl bg-pink-50 placeholder-pink-700 text-sm"
                    />

                    <select
                      value={prestation}
                      onChange={(e) => setPrestation(e.target.value)}
                      className="w-full border border-pink-300 p-3 rounded-xl bg-pink-50 text-sm"
                    >
                      <option value="">-- Choisissez une prestation --</option>
                      <optgroup label="Sourcils">
                        <option value="Browlift">Browlift (30€)</option>
                        <option value="Restructuration + teinture">Restructuration + teinture (20€)</option>
                        <option value="Airbrush">Airbrush (20€)</option>
                      </optgroup>
                      <optgroup label="Cils">
                        <option value="Rehaussement de cils">Rehaussement de cils (30€)</option>
                        <option value="Rehaussement + teinture + soin">Rehaussement + teinture + soin (40€)</option>
                        <option value="Pack duo complet">Pack duo complet (60€)</option>
                      </optgroup>
                      <optgroup label="Dentaire">
                        <option value="Blanchiment dentaire">Blanchiment dentaire (60€)</option>
                        <option value="Retouche">Retouche (30€)</option>
                        <option value="Strass dentaire">Strass dentaire (15€)</option>
                      </optgroup>
                    </select>

                    {errorMessage && (
                      <div className="text-red-600 text-sm mb-2">{errorMessage}</div>
                    )}

                    <button
                      onClick={handleConfirm}
                      className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold p-3 rounded-xl transition text-sm"
                    >
                      Confirmer la réservation
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {confirmed && (
            <div className="mt-6 text-center text-green-600 font-medium">
              ✅ {firstname} {lastname}, votre rendez-vous est confirmé pour le {selectedDate?.toLocaleDateString('fr-FR')} à {selectedSlot}.
            </div>
          )}
        </div>
        {/* <SocialBar/> */}
      </section>
    </>
  );
}