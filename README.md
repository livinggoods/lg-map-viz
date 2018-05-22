LgMapViz
=========

A module to visualize data in layers on a map

## Installation

  `npm install lg-map-viz`

## Requirements
- Mapbox Api Key
- 
## Usage

### Vue JS
- #### Setup


    import LgMapViz from 'lg-map-viz'
    export default {
        ...
        components: {
            LgMapViz
        },
        ...
   
    }
    
You can then go ahead and use it in a template as follows:
    
    <template>
        <LgMapViz :access-token="[token]" :layers="[layers]" :map-option="[map-options]"></LgMapViz>
    </template
    
- #### Props
   ```access-key```  
    Type: `String`    
    Required: `true`
    
    This is the access token from Mapbox, which you can get from the Mapbox Studio Dashboard
    
   ---
   `layers`  
   Type: `Object`  
   Required: `true`  
   
   This is an array of objects containing the layers you want to add to the map. The object should have the following format:
   ```$xslt
   [{
       "id": "",
       "type": "",
       "source": {
           "type": "",
           "data": {
               "type": "",
               "properties": {},
               "geometry": {
                   "type": "",
                   "coordinates": [
                       [lat, lng]
                   ]
               }
           }
       },
       "layout": {
           "line-join": "",
           "line-cap": ""
       },
       "paint": {
           "line-color": "",
           "line-width": ""
       }
   }

  
##Change Log



## Contributing

Use LG Contributing Guidelines and Standards. Ensure you take care to 
maintain existing coding style. Lint and test your code