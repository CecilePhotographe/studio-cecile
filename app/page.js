export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex">

      <aside className="w-64 bg-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-8">
          Studio Cécile
        </h1>

        <nav className="space-y-4">
          <p>🏠 Tableau de bord</p>
          <p>👤 Clients</p>
          <p>📅 Agenda</p>
          <p>📸 Séances</p>
          <p>🖼 Galeries</p>
          <p>💶 Tarifs</p>
          <p>📄 Contrats</p>
          <p>💰 Factures</p>
        </nav>
      </aside>


      <section className="flex-1 p-10">

        <h2 className="text-3xl font-bold mb-8">
          Bonjour Cécile 👋
        </h2>


        <div className="grid grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg">
              Clients
            </h3>
            <p className="text-3xl font-bold">
              0
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg">
              Séances à venir
            </h3>
            <p className="text-3xl font-bold">
              0
            </p>
          </div>


          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg">
              Galeries
            </h3>
            <p className="text-3xl font-bold">
              0
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}
