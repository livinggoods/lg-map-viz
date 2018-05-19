<template>
    <div id="app">
        <Mapbox @map-load="mapLoaded" :access-token="accessToken" :map-options="mapOptions" :layers="layers">

        </Mapbox>
    </div>
</template>

<script>
    import Mapbox from 'mapbox-gl-vue'

    export default {
        name: 'LgMapViz',
        data() {
            return {}
        },
        props: [
            'accessToken',
            'mapOptions',
            'layers'
        ],
        methods: {
            /**
             * @desc This method adds layers passed to the module as props onto the map. This has to happen after the map is loaded
             * @param 1 map - instance of the loaded map.
             */
            mapLoaded: function (map) {
                this.layers.forEach(function (layer) {
                    map.addLayer(layer);
                });
            }
        },
        components: {
            Mapbox
        }

    }
</script>

<style>

</style>
