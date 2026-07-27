export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f4ef] flex text-[#4b4038]">

      {/* MENU */}
      <aside className="w-72 bg-white shadow-lg p-8">

        <h1 className="text-2xl font-serif mb-10 text-[#8b6f55]">
          📷 Cécile Photographe
        </h1>

        <nav className="space-y-5 text-[15px]">

          <div className="font-semibold">
            🏠 Tableau de bord
          </div>

          <div>
            👤 Clients
          </div>

          <div>
            📅 Agenda
          </div>


          <p className="pt-5 font-semibold text-[#b08b65]">
            Prestations
          </p>

          <div>
            💍 Mariages
          </div>

          <div>
            🤰 Grossesse
          </div>

          <div>
            👨‍👩‍👧 Famille
          </div>

          <div>
            📸 Portrait
          </div>

          <div>
            🎞 Photobooth
          </div>


          <p className="pt-5 font-semibold text-[#b08b65]">
            Gestion
          </p>

          <div>
            🖼 Galeries
          </div>

          <div>
            💶 Tarifs
          </div>

          <div>
            📄 Contrats
          </div>

          <div>
            💰 Factures
          </div>

        </nav>

      </aside>


      {/* CONTENU */}
      <section className="flex-1 p-12">


        <h2 className="text-4xl font-serif mb-3">
          Bonjour Cécile ✨
        </h2>

        <p className="mb-10 text-gray-600">
          Retrouvez ici toute la gestion de votre activité photo.
        </p>


        <div className="grid grid-cols-4 gap-6">


          <div className="bg-white rounded-2xl shadow p-6">
            <p>👤 Clients</p>
            <h3 className="text-4xl mt-4">
              0
            </h3>
          </div>


          <div className="bg-white rounded-2xl shadow p-6">
            <p>📸 Séances</p>
            <h3 className="text-4xl mt-4">
              0
            </h3>
          </div>


          <div className="bg-white rounded-2xl shadow p-6">
            <p>🖼 Galeries</p>
            <h3 className="text-4xl mt-4">
              0
            </h3>
          </div>


          <div className="bg-white rounded-2xl shadow p-6">
            <p>💰 Chiffre d'affaires</p>
            <h3 className="text-4xl mt-4">
              0 €
            </h3>
          </div>


        </div>


        <div className="mt-10 bg-white rounded-2xl shadow p-8">

          <h3 className="text-2xl font-serif mb-5">
            Prochaines séances 📅
          </h3>

          <p className="text-gray-500">
            Aucune séance programmée pour le moment.
          </p>

        </div>


      </section>

    </main>
  );
}
