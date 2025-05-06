'use client';

import { useEffect, useState } from 'react';

type Reservation = {
  id: number;
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  date: string;
  hour: string;
  prestation: string;
  confirmed: boolean;
};

const ADMIN_PASSWORD = 'wafou123';

export default function AdminPage() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [error, setError] = useState('');
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [search, setSearch] = useState('');
  const [filterDate, setFilterDate] = useState('');

  useEffect(() => {
    if (!auth) return;

    const fetchReservations = async () => {
      try {
        const res = await fetch('/api/reservation');
        const result = await res.json();
        if (result.success) {
          setReservations(result.data);
        } else {
          setError(result.error || 'Erreur de récupération');
        }
      } catch (err) {
        console.error(err);
        setError('Erreur de connexion au serveur');
      }
    };

    fetchReservations();
  }, [auth]);

  const handleDelete = async (id: number) => {
    const confirm = window.confirm('Supprimer cette réservation ?');
    if (!confirm) return;

    try {
      const res = await fetch('/api/reservation', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();
      if (result.success) {
        setReservations((prev) => prev.filter((r) => r.id !== id));
      } else {
        alert('Erreur lors de la suppression');
      }
    } catch (err) {
      console.error(err);
      alert('Erreur de connexion au serveur');
    }
  };

  if (!auth) {
    return (
      <div className="p-6 max-w-sm mx-auto text-center text-neutral-800">
        <h1 className="text-2xl font-bold mb-4">Accès admin</h1>
        <input
          type="password"
          placeholder="Mot de passe"
          className="w-full border p-2 rounded mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={() => {
            if (password === ADMIN_PASSWORD) {
              setAuth(true);
            } else {
              setError('Mot de passe incorrect.');
            }
          }}
          className="w-full p-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Se connecter
        </button>
        {error && <p className="mt-3 text-red-600">{error}</p>}
      </div>
    );
  }

  const filtered = reservations.filter((r) => {
    const matchSearch = `${r.firstname} ${r.lastname} ${r.phone} ${r.email}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchDate = filterDate ? r.date === filterDate : true;

    return matchSearch && matchDate;
  });

  return (
    <div className="p-6 max-w-3xl mx-auto text-neutral-800">
      <h1 className="text-2xl font-bold mb-4">Liste des réservations</h1>

      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Rechercher par nom, prénom, téléphone ou email"
          className="flex-1 border p-2 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="date"
          className="border p-2 rounded"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
      </div>

      {error && <p className="text-red-600">{error}</p>}
      {filtered.length === 0 && !error && <p>Aucune réservation trouvée.</p>}

      {filtered.map((r) => (
        <div
          key={r.id}
          className="mb-3 p-3 border rounded-lg shadow-sm bg-white flex justify-between items-center"
        >
          <div>
            <p><strong>{r.firstname} {r.lastname}</strong></p>
            <p>📅 {new Date(r.date).toLocaleDateString('fr-FR')} à {r.hour}</p>
            <p>📞 {r.phone}</p>
            <p>✉️ {r.email}</p>
            <p>💅 {r.prestation}</p>
            <p>✅ {r.confirmed ? 'Confirmé' : 'Non confirmé'}</p>
          </div>
          <button
            onClick={() => handleDelete(r.id)}
            className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Supprimer
          </button>
        </div>
      ))}
    </div>
  );
}
