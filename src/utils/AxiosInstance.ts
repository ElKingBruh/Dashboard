import axios from "axios";


const instanciaAxios = axios.create({
  baseURL: 'https://www.datos.gov.co/resource/'
});

export default instanciaAxios;