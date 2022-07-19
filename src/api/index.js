import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
    url: URL,
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    
    },
    headers: {
      'X-RapidAPI-Key': '49662256f5msh37cdd0437036d6ap1fe262jsn961bc7d4903a',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  


export const getPlacesData = async (sw, ne) => {
    try {
        const {data : { data }} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          
          },
          headers: {
            'X-RapidAPI-Key': '49662256f5msh37cdd0437036d6ap1fe262jsn961bc7d4903a',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }
    catch (error){
       console.log(error.message);
    }
}


