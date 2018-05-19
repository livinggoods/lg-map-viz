<template>
    <div id="app">
        <Mapbox :access-token="accessToken" :map-options="mapOptions">

        </Mapbox>
    </div>
</template>

<script>
    import Mapbox from 'mapbox-gl-vue'

    export default {
        name: 'LgMapViz',
        data () {
            return {}
        },
        props: [
            'accessToken',
            'mapOptions'
        ],
        methods:{
            mapLoaded:function () {

            }
        },
        components: {
            Mapbox
        }

    }
</script>

<style>

</style>
