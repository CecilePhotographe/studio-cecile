export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex">

      <aside className="w-64 bg-white shadow-lg p-6">

        <h1 className="text-2xl font-bold mb-8">
          📸 Studio Cécile
        </h1>

        <nav className="space-y-5 text-gray-700">

          <div>🏠 Tableau de bord</div>
          <div>👤 Clients</div>
          <div>📅 Agenda</div>
          <div>📸 Séances</div>
          <div>🖼 Galeries</div>
          <div>💶 Tarifs</div>
          <div>📄 Contrats</div>
          <div>💰 Factures</div>

        </nav>

      </aside>


      <section className="flex-1 p-10">

        <h2 className="text-3xl font-bold mb-8">
          Bonjour Cécile 👋
        </h2>


        <div className="grid grid-cols-3 gap-6">


          <div className="bg-white rounded-xl shadow p-6">
            <h3>👤 Clients</h3>
            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>


          <div className="bg-white rounded-xl shadow p-6">
            <h3>📅 Séances à venir</h3>
            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>


          <div className="bg-white rounded-xl shadow p-6">
            <h3>🖼 Galeries</h3>
            <p className="text-4xl font-bold mt-3">
              0
            </p>
          </div>


        </div>


        <div className="mt-10 bg-white rounded-xl shadow p-6">

          <h3 className="text-xl font-bold mb-4">
            Prochaines séances
          </h3>

          <p>
            Aucune séance programmée
          </p>

        </div>


      </section>


    </main>
  );
}
