import { Nunito } from "next/font/google"
import SectionTitle from "../utils/SectionTitle"
import ContactForm from "./ContactForm"

const nunito = Nunito({ subsets: ["latin"] })

export default function Contact() {
  return (
    <section
      className="min-h-screen bg-sky-50 py-10 mt-16 md:mt-0"
      id="contact">
      <div className="md mx-auto flex h-full flex-col gap-8 md:max-w-7xl md:flex-row md:items-center px-5 md:px-10 mdgap-0">
        <div className="flex flex-col gap-7 md:w-1/2">
          <SectionTitle type="contact" />
          <p className="max-w-md leading-loose text-slate-500 md:px-0">
            I&apos;m currently avaliable to take on new projects, so feel free
            to send me a message about anything that you want to run past me.
            You can contact anytime at 24/7
          </p>
          <div
            className="flex flex-col gap-1.5 text-lg md:px-0"
            style={nunito.style}>
            <span className="font-bold tracking-wider text-blue-950 underline underline-offset-4">
              +62 821-2210-4908
            </span>
            <span className="font-bold tracking-wider text-blue-950 underline underline-offset-4">
              abdullah.alam@outlook.de
            </span>
            <span className="font-bold tracking-wider text-blue-950 underline underline-offset-4">
              Pondok Bukit Agung, Semarang
            </span>
          </div>
        </div>
        <ContactForm />
      </div>
      <div className="mx-auto mt-16 h-[50vh] w-full shadow-lg md:h-[40vh] md:w-[50vw]">
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
