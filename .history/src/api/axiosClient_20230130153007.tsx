
import axios from "axios";
import firebase from 'firebase/compat/app';

const getFirebaseToken = async () =>{
    const currentUser = firebase.auth().currentUser;
  if(currentUser){
    return currentUser.getIdToken();
  }
}

// Add a request interceptor
axios.interceptors.request.use(async (config) => {


    // const currentUser = firebase.auth().currentUser;
    // if(currentUser){
    //   console.log("asdasdasd");
    //   const token = await currentUser.getIdToken();
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    const token = await getFirebaseToken() as any;
    if(token){
      console.log("asdasdasdasd2");
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });