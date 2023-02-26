export default function InputForm() {
  return (
    <section className="">
      <div className="px-4 mx-auto">
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Got a technical issue? Want to send feedback about a beta feature?
          Need details about our Business plan? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="email@example.com"
              required></input>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-medium text-gray-900">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Let us know how we can help you"
              required></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-medium text-gray-900">
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Leave a comment..."></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}
