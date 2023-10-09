import { BsCalendarDate } from 'react-icons/bs'
import { BiSolidHand } from 'react-icons/bi'

export default function Footer() {
  return (
    <div className="rounded mt-10 overflow-hidden bg-blue-500 py-16 sm:py-24 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
            <p className="mt-4 text-lg leading-8 text-white">
              Subscribe to our newsletter to stay updated with our latest articles and news.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4 bg-white bg-opacity-20 rounded-md px-3.5 py-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-transparent text-white placeholder-white/60 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-blue-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-white">
                <BsCalendarDate className="h-6 w-6 text-blue-500" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
              <dd className="mt-2 leading-7 text-white">
                Stay updated with our weekly articles, covering a wide range of topics.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white p-2 ring-1 ring-white">
                <BiSolidHand className="h-6 w-6 text-blue-500" aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-white">No spam</dt>
              <dd className="mt-2 leading-7 text-white">
                We promise no spam! Your email address is safe with us.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
