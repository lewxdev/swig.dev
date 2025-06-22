const comments = [
  {
    id: 1,
    author: "alice.bsky.social",
    content: "looking forward to this! working on a new **react** project",
  },
  {
    id: 2,
    author: "bob.bsky.social",
    content: "see you there ☕",
  },
];

export default async function EventPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="space-y-8">
      <div>
        <div className="flex items-start justify-between pb-2">
          <h1 className="text-xl">code & coffee #42</h1>
          <a
            href={`/event/${id}/edit`}
            className="text-sm text-orange-600 hover:underline"
          >
            edit
          </a>
        </div>
        <div className="pb-4 text-sm text-gray-600">
          tomorrow 9:00am • local cafe
        </div>
        <div className="border-b border-gray-200"></div>
      </div>
      <div>
        <h2 className="pb-2">description</h2>
        <div className="space-y-2 text-gray-700">
          <p>
            join us for our weekly code & coffee session. bring your laptop,
            grab a coffee, and work on projects together.
          </p>
          <p>perfect for:</p>
          <ul className="list-inside list-disc pl-4">
            <li>networking with local developers</li>
            <li>getting help with coding problems</li>
            <li>finding collaborators</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="pb-2">location</h2>
        <p className="text-gray-700">
          local cafe
          <br />
          123 main st
          <br />
          anytown, usa
        </p>
      </div>
      <div>
        <h2 className="pb-2">attendees (12)</h2>
        <div className="space-y-1">
          <div className="text-sm">@alice.bsky.social</div>
          <div className="text-sm">@bob.bsky.social</div>
          <div className="text-sm">@charlie.bsky.social</div>
          <div className="text-sm text-gray-500">+9 more</div>
        </div>
      </div>
      <div>
        <h2 className="pb-2">tags</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 px-2 py-1 text-xs">javascript</span>
          <span className="bg-gray-100 px-2 py-1 text-xs">coffee</span>
          <span className="bg-gray-100 px-2 py-1 text-xs">networking</span>
        </div>
      </div>
      <div>
        <h2 className="pb-4">comments</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border-gray-100 pb-4 not-last:border-b"
            >
              <div className="pb-1 text-sm text-gray-600">{comment.author}</div>
              <div className="text-sm">{comment.content}</div>
            </div>
          ))}
        </div>
        <div className="space-y-2 pt-6">
          <textarea
            placeholder="add a comment..."
            className="w-full resize-none border-b border-gray-200 bg-transparent py-2 focus:border-orange-600 focus:outline-none"
            rows={3}
          />
          <button className="hover:bg-opacity-90 bg-orange-600 px-4 py-1 text-sm text-white">
            post
          </button>
        </div>
      </div>
    </div>
  );
}
