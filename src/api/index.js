import axios from 'axios';

export const getPlacesData = async(type, sw, ne) => {
    try {
        //request
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            //axios method automatically set to GET
              params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
              },
              headers: {
                'X-RapidAPI-Key': 'dd422c2b85msh7101afaf3dd60dcp1036d3jsn0fd315b5876b',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
              }
            });

        return data;

    } catch (error) {
        console.log(error)
        
    }
}