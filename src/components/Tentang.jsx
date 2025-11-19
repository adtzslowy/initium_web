import React, { useRef, useEffect, useState } from 'react'

const steps = [
  {title: "Sejarah Singkat Initium", desc: "Initium dibuat pada Juli 2025 karena adanya masalah untuk mahasiswa baru di dunia IT yang dimana ketika ingin menginstall Visual Studio Code, Laragon, PHP, dan Composer itu sering mengalami kebingungan, jadi saya menciptakan initium ini untuk mempermudah mereka dalam menginstall itu semua."},
  {title: "Kemudahan Penggunaan", desc: "Initium dibuat untuk mempermudah kalian yang baru join di bidang IT terutama di web-dev menggunakan PHP dan juga Laragon karena bagi yang baru join itu pasti bakalan pusing mencari download linknya."},
  {title: "Efisiensi Waktu User", desc: "Dengan initium, kalian bisa mempersingkat waktu kalian untuk mendownload dan menginstall tools tersebut dengan hanya menekan nomor tanpa harus ribet memasukkan link seperti di google lagi."}
]

const Tentang = () => {
  const stepRefs = useRef([])
  const [visible, setVisible] = useState([])

  useEffect(() => {
    stepRefs.current = stepRefs.current.slice(0, steps.length)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting){
            const index = stepRefs.current.indexOf(entry.target)
            setVisible(prev => [...prev, index])
          }
        })
      },
      { threshold: 0.5 }
    )
    stepRefs.current.forEach(ref => ref && observer.observe(ref))
    return () => stepRefs.current.forEach(ref => ref && observer.unobserve(ref))
  }, [])

  return (
    <section id="tentang" className='min-h-screen bg-[#1d2a35] flex flex-col font-sansation items-center px-6 py-20 rounded-b-full'>
      <h1 className='text-6xl font-semibold mb-6 font-sansation text-center text-[#fff8ee]'>Tentang Initium.</h1>
      <p className='max-w-6xl text-2xl mb-20 font-sansation text-justify text-[#fff8ee]'>
        Initium adalah tools modern yang mempermudah kalian untuk menginstall <span className='text-green-500'>Laragon, PHP Terbaru, dan Composer</span> dengan initium proses installasi tersebut bisa dilakukan dengan hanya menekan nomor angka dari 1-10. Mudah bukan?
      </p>

      <div className="relative w-full max-w-2xl flex rounded-lg pr-10 flex-col items-center justify-center">
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] rounded origin-top scale-y-0 animate-scaleY"></div>

        <div className="flex flex-col items-center space-y-16 mt-10">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => stepRefs.current[index] = el}
              className={`relative w-full flex items-center transition-all duration-700 ease-out transform ${visible.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="w-1/2 pr-8 text-right">
                <h3 className="text-4xl text-[#fff8ee] font-semibold">{step.title}</h3>
              </div>

              <div className="w-0 flex justify-center">
                <div className="w-5 h-5 text-[#fff8ee] rounded-full border-2 z-10"></div>
              </div>

              <div className="w-1/2 pl-8 text-left">
                <p className="text-xl text-[#fff8ee] text-justify">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes scaleY {
          to { transform: scaleY(1); }
        }
        .animate-scaleY {
          animation: scaleY 1s forwards;
        }
      `}</style>
    </section>
  )
}

export default Tentang
