import axios from 'axios';
const API_URL = 'http://localhost:9090/';
export class APIService{

constructor(){
}




createInfo(data){

    const url = `${API_URL}/Users`;
    return axios.post(url,data);
}

createQuestion(data1){

    const url = `${API_URL}/QuestionaireForm`;
    return axios.post(url,data1);
}

}