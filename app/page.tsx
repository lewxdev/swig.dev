import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <input
          type="text"
          placeholder="search events..."
          className="w-full border-b border-gray-200 bg-transparent py-2 focus:border-orange-600 focus:outline-none"
        />
      </div>
      <div>
        <h2 className="pb-4">nearby events</h2>
        <div className="space-y-4">
          <div>
            <Link href="/event/1" className="block hover:text-orange-600">
              <div className="pb-1">code & coffee #42</div>
              <div className="text-sm text-gray-600">
                tomorrow 9:00am • local cafe
              </div>
            </Link>
          </div>
          <div className="border-b border-gray-100"></div>
          <div>
            <Link href="/event/2" className="block hover:text-orange-600">
              <div className="pb-1">react meetup</div>
              <div className="text-sm text-gray-600">
                friday 6:00pm • tech hub
              </div>
            </Link>
          </div>
          <div className="border-b border-gray-100"></div>
          <div>
            <Link href="/event/3" className="block hover:text-orange-600">
              <div className="pb-1">beer.js</div>
              <div className="text-sm text-gray-600">
                saturday 7:00pm • brewery
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
