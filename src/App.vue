<template>
    <div class="container">
        <searchBar @termChange="onTermChange"></searchBar>
        <div class="row">
            <videoDetail :video="selectedVideo"></videoDetail>
            <videoList :videos="videos" @videoSelect="onVideoSelect"></videoList><!--v-bind can be simply replaced as :-->
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import searchBar from './components/searchBar';
import videoList from './components/videoList';
import videoDetail from './components/videoDetail';

const API_KEY = 'AIzaSyDMEft5F5oVoZiyp_na2VLP2CbtNV7HfQE';
export default {
    name: 'App',
    components: {
        searchBar,
        videoList,
        videoDetail
    },

    data() {
        return { videos: [], selectedVideo: null};
    },
    methods: {
        onTermChange: function(searchTerm){
            axios.get('https://www.googleapis.com/youtube/v3/search', {
                params: {
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            }).then(response =>{
                this.videos = response.data.items;
            });
        },

        onVideoSelect(video){
            this.selectedVideo = video;
        }
    }
}
</script>