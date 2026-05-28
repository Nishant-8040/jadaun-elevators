export default function Home() {
  const phone1 = '+91 9953778349'
  const phone2 = '+91 7693020273'
  const whatsapp = 'https://wa.me/919953778349'

  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-yellow-400 mb-6">
        Jadaun Elevators
      </h1>

      <p className="text-xl mb-10">
        Premium Elevator Installation & Services
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white/10 p-6 rounded-3xl">
          <img src="/founder.jpg" alt="Founder" className="rounded-2xl mb-4" />
          <h2 className="text-3xl font-bold">
            Mr. Baldev Singh Jadaun
          </h2>
          <p className="text-yellow-400">Founder / Director</p>
        </div>

        <div className="bg-white/10 p-6 rounded-3xl">
          <img src="/gm.jpg" alt="GM" className="rounded-2xl mb-4" />
          <h2 className="text-3xl font-bold">
            Mr. Praval Pratap Singh Jadaun
          </h2>
          <p className="text-yellow-400">General Manager</p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-4xl font-bold mb-5">Contact</h2>

        <p>{phone1}</p>
        <p>{phone2}</p>

        <p className="mt-4">
          BaldevSinghJadaun@gmail.com
        </p>

        <a
          href={whatsapp}
          className="inline-block mt-6 bg-yellow-400 text-black px-6 py-3 rounded-xl font-bold"
        >
          WhatsApp Now
        </a>
      </div>
    </div>
  )
}
