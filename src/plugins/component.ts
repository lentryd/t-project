import { App } from "vue";

import Post from "@/components/Post.vue";
import Cover from "@/components/Cover.vue";
import Header from "@/components/Header.vue";
import Headline from "@/components/Headline.vue";
import Teammate from "@/components/Teammate.vue";
import SwipeBlock from "@/components/Swipe-block.vue";

export default {
  install(app: App) {
    app
      .component("Post", Post)
      .component("Cover", Cover)
      .component("Header", Header)
      .component("Headline", Headline)
      .component("Teammate", Teammate)
      .component("SwipeBlock", SwipeBlock);
  },
};

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    Post: typeof Post;
    Cover: typeof Cover;
    Header: typeof Header;
    Headline: typeof Headline;
    Teammate: typeof Teammate;
    SwipeBlock: typeof SwipeBlock;
  }
}
