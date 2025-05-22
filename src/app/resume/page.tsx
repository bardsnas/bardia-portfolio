import { Inter } from "next/font/google";

export default function ResumePage() {
    return (
      <section className="mb-16">
        <h2 className="text-3xl font-extrabold mb-4 text-slate-800">Resume</h2>
        <div className="w-full aspect-[8.5/11] border rounded shadow">
          <iframe
            src="/Resume.pdf"
            className="w-full h-full rounded"
            title="Resume Preview"
          />
        </div>
      </section>
    );
}  


