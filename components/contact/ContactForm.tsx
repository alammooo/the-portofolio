export default function ContactForm() {
  return (
    <form
      action=""
      className="flex w-1/2 flex-col gap-10">
      <input
        type="text"
        id="base-input"
        className="block w-full rounded border border-blue-300 px-3 py-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Enter Your Name"
      />
      <input
        type="text"
        id="base-input"
        className="block w-full rounded border border-blue-300 px-3 py-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Your Email"
      />

      <textarea
        id="message"
        rows={4}
        className="block w-full rounded border border-blue-300 px-3 py-4 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Leave a comment..."></textarea>
      <button
        type="button"
        className=" rounded bg-blue-950 max-w-fit px-16 tracking-wider py-4 font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Send Message!
      </button>
    </form>
  )
}
