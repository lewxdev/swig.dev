import { Jetstream } from "@skyware/jetstream";

const jetstream = new Jetstream();
jetstream.start();

jetstream.onCreate("app.bsky.feed.post", (event) => {
  console.log("New post: ", event.commit.record.text);
});
