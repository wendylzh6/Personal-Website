import React from 'react';
import { Camera, Dumbbell, MapPin } from 'lucide-react';

const Interests: React.FC = () => {
  const footprints = ["Bangkok", "Toronto", "Boston", "Chicago", "More to come"];

  const filmPhotos = [
    { id: "19JIHkLELIdj4h1CQXSU6C8h6JKQtiPA1", label: "Perspective" },
    { id: "1XJ39XYVnr3nEULWMWylSCO8beijW5jg5", label: "Texture" },
    { id: "1_Fv1L_gwEC5asH69bTKuprFikY6D-1WP", label: "Grain" },
    { id: "1lqVzZ1KOagzZTCWL32pKALfwCNjdisFs", label: "Stillness" },
    { id: "1AKlfU6DlSz82ABCUoBXa_aeJfgD_Cqdr", label: "Composition" },
    { id: "1EvEth_b15t64MCFSGOz_lL4Xl68EcuTl", label: "Momentum" },
    { id: "1g8f73_VTaltDhm-u7vdmbcg61vxS_PTs", label: "Observation" },
    { id: "1r9I8OltxiguDt1MchDZC0rQXX1dL8jSY", label: "Light Study" },
    { id: "1JrfhWxq9Bafl31nP2CCbNq68yGLNrFUz", label: "Street Life" },
    { id: "11dL3RaLPegSn3mHXTWwI5-zyQ_JHRN7T", label: "Vignette" },
    { id: "1SHgKB_Qi9KV_sjaorcMXvTha2sgMnhRA", label: "Nature Study" },
    { id: "1qi3EjE5JYvkJkpZ-3O_i8A67G4sreCpL", label: "Moment" }
  ];

  return (
    <div className="min-h-screen pt-20">
      
      {/* Hyrox Section - Strict 4-Color Palette for UI, but Colorful Imagery */}
      <section className="bg-stone-900 text-white py-24 px-6 md:px-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          <div className="flex items-center gap-4 mb-12 text-stone-400">
             <Dumbbell size={20} />
             <span className="uppercase tracking-[0.2em] text-[10px] font-bold">Resilience & Community</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h1 className="text-6xl md:text-9xl font-display font-extrabold tracking-tighter mb-8 uppercase leading-none">
                    Hyrox
                </h1>
                <div className="space-y-6 text-stone-400 text-lg leading-relaxed mb-10 max-w-xl">
                  <p>
                    A testing ground for resilience. Hyrox is where I push limits while connecting with an inclusive community of athletes.
                  </p>
                </div>

                <div className="mb-10">
                  <h4 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-4 flex items-center gap-2">
                    <MapPin size={12} /> Locations
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {footprints.map((city, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-sm text-[11px] font-bold tracking-tight text-white/80 uppercase">
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">Bonding</h4>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Collective Effort</span>
                    </div>
                     <div className="flex flex-col gap-1">
                        <h4 className="text-xl font-display font-bold text-white uppercase tracking-tight">Growth</h4>
                        <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Capacity</span>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                     <div className="bg-stone-800 rounded-sm overflow-hidden">
                       <img 
                        src="https://drive.google.com/thumbnail?id=176rvsRUeL_UGmVbHtppunTNkf0fPrY3b&sz=w1000" 
                        alt="Hyrox Achievement" 
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105" 
                       />
                     </div>
                     <p className="text-[10px] font-mono text-stone-400 text-right uppercase tracking-tighter">01. Endurance</p>
                </div>
                <div className="space-y-2 pt-12">
                     <div className="bg-stone-800 rounded-sm overflow-hidden">
                       <img 
                        src="https://drive.google.com/thumbnail?id=1o_qKkcFo-GgJZWo5SEPgUBqwVp9Sjw-9&sz=w1000" 
                        alt="Hyrox Performance" 
                        className="w-full h-80 object-cover transition-transform duration-500 hover:scale-105" 
                       />
                     </div>
                     <p className="text-[10px] font-mono text-stone-400 uppercase tracking-tighter">02. Discipline</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Film Photography - Colorful Masonry Layout */}
      <section className="bg-stone-50 text-stone-900 py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-8 text-stone-400">
                <Camera size={20} />
                <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-stone-400">Patience & Intention</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-extrabold tracking-tighter mb-8 uppercase italic leading-none">Film</h2>
              <p className="text-stone-400 text-lg leading-relaxed font-medium">
                Capturing daily textures through 35mm. An exercise in slow, intentional observation.
              </p>
            </div>
            <div className="hidden md:block">
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-stone-400 vertical-text [writing-mode:vertical-rl]">ARCHIVE 2024</span>
            </div>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filmPhotos.map((photo, index) => (
              <div key={photo.id} className="break-inside-avoid relative group overflow-hidden bg-stone-200 rounded-sm">
                <img 
                  src={`https://drive.google.com/thumbnail?id=${photo.id}&sz=w1000`} 
                  alt={photo.label} 
                  className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-stone-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-white/70 block mb-1">FRAME {index + 1}</span>
                    <span className="text-xs font-display font-bold text-white uppercase tracking-tight">{photo.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 flex justify-center">
            <div className="h-px w-16 bg-stone-400/20" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interests;