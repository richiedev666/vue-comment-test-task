<script setup lang="ts">
import { computed } from "vue";
import type { PostComment, PostPanelItem } from "@/composables/types";

interface Props {
  comment: PostComment;
}

const props = defineProps<Props>();

const likeComment = (): void => {
  console.log("Like comment");
};

const responseComment = (): void => {
  console.log("Response comment");
};

const moreComment = (): void => {
  console.log("More comment");
};

const postCommentPanelItems = computed<Array<PostPanelItem>>(() => {
  return [
    {
      title: "Нравится",
      action: likeComment,
    },
    {
      title: "Ответить",
      action: responseComment,
    },

    {
      title: "Еще",
      action: moreComment,
    },
  ];
});
</script>

<template>
  <div class="post-comment">
    <div class="post-comment__image">
      <img src="@/assets/images/comment-author.jpg" alt="" />
    </div>

    <div class="post-comment__content">
      <div class="post-comment__info">
        <div class="post-comment__info__title">
          <h4 class="text-title">{{ props.comment.author }}</h4>

          <span class="text-secondary">{{ props.comment.time }}</span>
        </div>

        <div class="post-comment__info__text">{{ props.comment.text }}</div>
      </div>

      <div class="post-comment__panel">
        <span
          v-for="(item, index) in postCommentPanelItems"
          :key="`${item.title}-${index}`"
          class="post-comment__panel__item text-secondary"
          @click="item.action"
        >
          {{ item.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/components/_post-comment.scss";
</style>
