import axios from "axios";
export const displayAll = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: -1.9619664046490897,
          bl_longitude: 30.0496484390259,
          tr_longitude: 30.083551560974144,
          tr_latitude: -1.9380335102591886,
          // bl_latitude: sw.lat,
          // tr_latitude: ne.lat,
          // bl_longitude: sw.lng,
          // tr_longitude: ne.lng,
          // limit: '30',

        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "f417989a03msh5efaf60926944fdp1485a0jsn6be051c8e408",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
