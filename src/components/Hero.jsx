import React from 'react'
import { GitBranchIcon, Download } from 'lucide-react'

const Hero = () => {
    const handleDownload = async () => {
        try {
            const owner = "adtzslowy";
            const repo = "initium_project";
            const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`)

            // Cek jika respon sukses
            if (!res.ok) {
                throw new Error('Gagal mengambil data rilis dari Github')
            }
            const release = await res.json()
            if (!release.length) {
                alert("No releases found.")
                return
            }

            const latest = release[0];
            const asset = latest.assets[0]

            if (!asset) {
                alert("No assets found in the latest release.")
                return;
            }

            const downloadUrl = asset.browser_download_url;
            const a = document.createElement("a");
            a.href = downloadUrl;
            a.download = asset.name;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        } catch (error) {
            console.error("Error fetching latest release: ", error)
            return;
        }
    }

    const handleGithub = () => {
        window.open("_blank")
    }

  return (
    <section className='pt-10 pb-20 '>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className='text-5xl font-bold text-green-black leading-tight font-sansation'>
                    Pengen installasi cepat? <br/>
                    <span className='text-green-400'>Initium <span class="text-black">solusinya!</span></span>
                </h1>

                <p className='mt-6 text-xl text-black/70 max-w-xl font-sansation'>
                    Tools untuk memudahkan proses installasi <span className='text-green-400'>laragon, php, dan composer</span> kamu dengan sangat mudah dan cepat.
                    Cukup pakai <span className='text-green-500'>Initium.</span> anda siap mengerjakan proyek website anda!
                </p>

                <div className="mt-2 flex gap-4 font-jetbrains text-[#fff8ee]">
                    <button className='px-4 py-2 bg-green-500 cursor-pointer rounded-lg flex items-center gap-2' onClick={handleDownload}>
                        <Download/>
                        <span className='text-2xl'>Windows</span>
                    </button>

                    <button className='px-4 py-2 bg-green-500 cursor-pointer rounded-lg flex items-center gap-2' onClick={handleGithub}>
                        <span className='text-2xl'>Github</span>
                        <GitBranchIcon/>
                    </button>
                </div>
            </div>

            <div className="bg-[#1a1a1a] text-green-500 rounded-xl p-6 shadow-2xl border border-black/10">
                <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>

                <div className="font-jetbrains text-lg">
                    <span className='text-green-400'>initium@dev$:</span> <a href="https://github.com/adtzslowy/initium_project" className='hover:text-blue-400 transition-all duration-300' target='_blank'>github.com/adtzslowy/initium_project</a>
                    <p className='mt-2'>Detected OS: Windows</p>
                    <p className='mt-1'>1. NodeJS</p>
                    <p className='mt-1'>2. Visual Studio Code</p>
                    <p className='mt-1'>3. Git</p>
                    <p className='mt-1'>5. Laragon</p>
                    <p className='mt-1'>6. Docker Desktop</p>
                    <p className='mt-1'>7. PHP for Laragon</p>
                    <p className='mt-1'>8. Composer</p>
                    <p className='mt-1'>9. Update Initium</p>
                    <p className='mt-1'>Masukkan nomor untuk menginstall (0): </p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero
