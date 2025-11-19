import React from 'react'
import { CheckCircle } from 'lucide-react'

const fitur = [
  { title: "Install Cepat", desc: "Install Laragon, PHP, Composer, NodeJS, dan tools lain hanya dengan beberapa klik." },
  { title: "Mudah Digunakan", desc: "Tampilan sederhana sehingga pengguna baru pun bisa langsung menggunakannya." },
  { title: "Update Otomatis", desc: "Selalu mendapatkan versi terbaru dari tools tanpa ribet mencari link download." },
  { title: "Support Windows", desc: "Fokus untuk mempermudah pengguna Windows menginstall semua tools." },
  { title: "Step by Step", desc: "Panduan dan pilihan angka memudahkan proses instalasi tanpa error." },
  { title: "Open Source", desc: "Source code tersedia di Github, bisa dikustomisasi sesuai kebutuhan." },
]

const handleUrl = () => {
    window.open("https://github.com/adtzslowy/initium_project/releases")
}

const Fitur = () => {
  return (
    <section id="fitur" className='py-20 font-sansation text-white'>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className='text-6xl font-semibold text-black text-center mb-12'>Fitur Initium</h1>
        <p className='text-center text-xl text-black mb-16 max-w-4xl mx-auto'>
          Initium hadir dengan beberapa fitur yang dimana fitur-fitur ini akan mempermudah kamu dalam menginstall tools-tools yang kalian inginkan untuk Laravel Development, di antaranya ada beberapa fitur dibawah ini.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fitur.map((item, index) => (
            <div key={index} className="bg-white/90 transition-all duration-300 rounded-xl p-6 shadow-lg flex flex-col gap-4">
              <CheckCircle className='w-8 h-8 text-black'/>
              <h3 className='text-2xl font-semibold text-black'>{item.title}</h3>
              <p className='text-black/80'>{item.desc}</p>
              <button
                onClick={handleUrl}
                className="relative overflow-hidden border-2 border-black text-black px-4 py-2 text-xl rounded-xl font-medium group cursor-pointer"
                >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        Baca Selengkapnya
                    </span>
                <span className="absolute bottom-0 left-0 w-full h-full bg-black/80 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg"></span>
            </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fitur
