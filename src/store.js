import {reactive} from 'vue';

export const store = reactive(
    {
        filmList:[],
        seriesList:[],
        apiKey:'b12dac9a65df8782bbd74dadfa3c5f7b',
        search:'',
        change:'',
        changeTv:'',
        genre:[],
        genreTv:[],
        cast:[]
    }
)