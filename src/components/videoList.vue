<template>
    <ul class="list-group col-md-4">
        <videoListItem v-for="video in videos" 
        :key="video" 
        :video="video"
        @videoSelect="onVideoSelect">
        </videoListItem>
    </ul>
</template>

<script>

import videoListItem from './VideoListItem';

export default {
    name: 'videoList',
    components: {
        videoListItem
    },
    props: {
        videos: Array
    },
    methods: {
        onVideoSelect(video){
            this.$emit('videoSelect', video);
        }
    }
}
</script>

<style>

</style>