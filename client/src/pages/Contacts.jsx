import InputForm from "../components/InputForm"

export default function Contacts() {
  return (
    <div className="bg-stone-50 min-h-screen ">
      <div className="flex flex-col mx-auto pt-16 animate-fadeInTo 2xl:max-w-7xl max-w-4xl">
        <div>
          <h3 className="bg-gray-100 max-w-fit px-2 text-gray-500 py-2 font-semibold uppercase tracking-wide">
            Contact
          </h3>
          <div className="flex justify-between items-center mt-3">
            <h1 className="font-bold text-3xl">Get in Touch</h1>
          </div>

          <div className="w-full h-[50vh] md:w-[50vw] md:h-[40vh] container mx-auto my-5 shadow-lg">
            <iframe
              title="Maps"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.8293631819572!2d110.42531270029043!3d-7.0493288329602315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bf886a10127%3A0x78d3fe013fe13077!2sXC2G%2B78V%2C%20Pd.%20Bukit%20Agung%2C%20Sumurboto%2C%20Kec.%20Banyumanik%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050269!5e0!3m2!1sde!2sid!4v1672522111766!5m2!1sde!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <InputForm />
        </div>
      </div>
    </div>
  )
}
