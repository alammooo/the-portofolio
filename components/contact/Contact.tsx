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
            I&apos;m currently avaliable to take on new projects, so feel free to
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
      <div className="container mx-auto my-5 h-[50vh] w-full pb-16 shadow-lg md:h-[40vh] md:w-[50vw]">
        <iframe
          title="Maps"
          className="h-full w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.8293631819572!2d110.42531270029043!3d-7.0493288329602315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bf886a10127%3A0x78d3fe013fe13077!2sXC2G%2B78V%2C%20Pd.%20Bukit%20Agung%2C%20Sumurboto%2C%20Kec.%20Banyumanik%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050269!5e0!3m2!1sde!2sid!4v1672522111766!5m2!1sde!2sid"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
