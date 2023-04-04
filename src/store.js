import {reactive} from 'vue';

export const store = reactive(
    {
        filmList:[],
        seriesList:[],
        search:'',
        change:'',
        genre:[],
        people:[]
    }
)