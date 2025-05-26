import Image from "next/image";
import { Github } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "ESP-NOW Fire Detection System",
      description:
        "Built a real-time fire sensing and mitigation system using FreeRTOS on an ESP32, integrated with AM2320 sensor and LCD over I2C.",
      tools: ["ESP32", "C++", "FreeRTOS", "I2C", "ESP-NOW"],
      github: "https://github.com/bardsnas/Advanced-Fire-Sensing-and-Mitigation-System",
    },
    {
      title: "5-Stage Pipelined CPU",
      description:
        "Implemented a MIPS-like pipelined processor with hazard detection, forwarding, and branch prediction using SystemVerilog.",
      tools: ["SystemVerilog", "ModelSim", "ARM Assembly", "Digital Design"],
      github: "https://github.com/bardsnas/PipelinedProcessor",
    },
    {
      title: "Single-Cycle CPU",
      description:
        "Combined a custom ALU and RegFile to construct a single cycle processor unit.",
      tools: ["SystemVerilog", "ModelSim", "ARM Assembly", "Digital Design"],
      github: "https://github.com/bardsnas/SingleCycleProcessor",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-100 text-slate-800 px-6 py-12 max-w-5xl mx-auto font-sans">
      <h1 className="text-3xl font-extrabold mb-10 text-slate-900">Projects</h1>

      <div className="grid gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="border border-slate-200 rounded-2xl p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-1 text-slate-900">
              {proj.title}
            </h3>
            <p className="text-slate-700 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.tools.map((tool, i) => (
                <span
                  key={i}
                  className="text-xs bg-blue-100 text-blue-800 rounded-full px-2 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
            <a
              href={proj.github}
              className="text-sm text-blue-600 hover:underline flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        ))}

        <section className="mt-8 space-y-4">
          <h3 className="text-xl font-bold text-slate-800">
            Project Details: Fire Mitigation System
          </h3>
          <p className="text-slate-700 leading-relaxed max-w-3xl">
            The Fire Danger sign is a halmark of the American forest. Marking your entrance to the park also comes with the warning that spread of wildfire is imminent, bringing caution to campers, hikers, and visitors alike. I had the idea of digitizing this necessary signage via an embedded system to boost its reliability and efficiency. Combining an AM2320 Temperature and Humdity Sensor, PIR Motion Sensor, LEDs, and ESP32 Microcontrollers, I was able to demonstrate a system that would allow the park ranger to monitor entrances of their park while an automated system calculates the Fire Weather Index (FWI) and automatically updates the digital fire danger sign at park entrances.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Image
              src="/firedanger.jpg"
              alt="Fire danger sign"
              width={600}
              height={400}
              className="rounded shadow object-cover"
            />
            <Image
              src="/fwi.png"
              alt="Fire Weather Index"
              width={600}
              height={400}
              className="rounded shadow object-cover"
            />
          </div>
        </section>
      </div>
    </main>
  );
}

