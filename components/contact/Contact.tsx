import { Nunito } from "next/font/google"
import SectionTitle from "../utils/SectionTitle"
import ContactForm from "./ContactForm"

const nunito = Nunito({ subsets: ["latin"] })

export default function Contact() {
  return (
    <section
      className="min-h-screen bg-sky-50"
      id="contact">
      <div className="mx-auto flex h-full max-w-7xl items-center px-10 py-16">
        <div className="flex w-1/2 flex-col gap-7">
          <SectionTitle type="contact" />
          <p className="max-w-md leading-loose text-slate-500">
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want to run past me. You
            can contact anytime at 24/7
          </p>
          <div
            className="flex flex-col gap-1.5 border-l-4 border-blue-600 pl-3 text-lg"
            style={nunito.style}>
            <a
              href=""
              className="font-bold tracking-wider text-blue-950 underline underline-offset-4">
              +62 821-2210-4908
            </a>
            <a
              href=""
              className="font-bold tracking-wider text-blue-950 underline underline-offset-4">
              abdullah.alam@outlook.de
            </a>
            <a
              href=""
              className="font-bold tracking-wider text-blue-950 underline underline-offset-4">
              Pondok Bukit Agung, Semarang
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}
