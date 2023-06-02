import { ref } from 'vue';

export const useGetIcon = (weatherCondition) => {
  const imageAddress = ref('');

  switch (weatherCondition) {

    case "Thunderstorm":
      imageAddress = "https://cdn-icons-png.flaticon.com/128/1779/1779927.png";
      break;

    case "Drizzle":
      imageAddress = "https://cdn-icons-png.flaticon.com/128/1375/1375394.png";
      break;

    case "Rain":
      imageAddress = "https://cdn-icons-png.flaticon.com/128/4088/4088981.png";
      break;

    case "Snow":
      imageAddress = "https://cdn-icons-png.flaticon.com/128/4724/4724105.png";
      break;

    case "Clear":
      imageAddress = "https://cdn-icons-png.flaticon.com/128/7780/7780231.png";
      break;

    case "Clouds":
      imageAddress.value = "https://cdn-icons-png.flaticon.com/128/3751/3751193.png";
      break;

    default:
      imageAddress = "https://cdn-icons-png.flaticon.com/128/8691/8691507.png";
      break;
  }

  console.log("before data......",imageAddress.value);
  return {
    imageAddress
  }
};
