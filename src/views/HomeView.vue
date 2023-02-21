<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import PostCommentComponent from "@/components/PostComment.vue";
import type { Post, PostPanelItem } from "@/composables/types";

const likePost = (): void => {
  console.log("Like post");
};

const commentPost = (): void => {
  console.log("Comment post");
};

const blockPost = (): void => {
  console.log("Block post");
};

const morePost = (): void => {
  console.log("More post");
};

const addComment = (): void => {
  post.comments.push({
    text: comment.value,
    time: "12:34",
    author: "me",
  });

  comment.value = "";
};

const post = reactive<Post>({
  id: 1,
  author: "Post Author",
  time: "17 января 09:12",
  text: "Post body",
  likes: 0,
  comments: [
    {
      text: "Comment text",
      time: "12:34",
      author: "some guy",
    },

    {
      text: "Comment text 2",
      time: "12:34",
      author: "some guy",
    },
  ],
  views: 1,
});

const commentPanelItems = computed<Array<PostPanelItem>>(() => {
  return [
    {
      title: "Нравится",
      action: likePost,
    },
    {
      title: "Комментировать",
      action: commentPost,
    },
    {
      title: "Не следить",
      action: blockPost,
    },
    {
      title: "Еще",
      action: morePost,
    },
  ];
});

const comment = ref<string>("");
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <div class="post">
        <div class="post__author-image">
          <img src="@/assets/images/post-author.jpg" alt="" />
        </div>

        <div class="post__content">
          <div class="post__info">
            <h3 class="post__info__author">{{ post.author }}</h3>

            <p class="post__info__date text-secondary">{{ post.time }}</p>

            <p class="post__info__text">{{ post.text }}</p>

            <div class="post__info__new-user">
              <div class="post__info__new-user__image">
                <img src="@/assets/images/comment-author.jpg" alt="" />
              </div>

              <div class="post__info__new-user__content">
                <div class="post__info">
                  <h3 class="post__info__author">{{ post.author }}</h3>
                </div>
              </div>

              <div class="post__info__new-user__icon">
                <img src="@/assets/icons/info-icon.svg" alt="" />
              </div>
            </div>
          </div>

          <div class="post__panel__wrapper">
            <div class="post__panel">
              <span
                v-for="(item, index) in commentPanelItems"
                :key="`${item.title}-${index}`"
                class="post__panel__item text-secondary"
                @click="item.action"
              >
                {{ item.title }}
              </span>
            </div>

            <div class="post__panel__views text-secondary">
              <img
                class="post__panel__views__icon"
                src="@/assets/icons/views-icon.svg"
                alt=""
              />

              <span>{{ post.views }}</span>
            </div>
          </div>

          <div class="post__comments">
            <PostCommentComponent
              v-for="(comment, index) in post.comments"
              :key="`comment-${index}`"
              :comment="comment"
            />
          </div>

          <div class="post__comment-input">
            <div class="post__comment-input__image">
              <img src="@/assets/images/post-author.jpg" alt="" />
            </div>

            <input
              id="comment"
              type="text"
              placeholder="Добавить комментарий"
              v-model="comment"
              @change="addComment"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/pages/_post.scss";
</style>
