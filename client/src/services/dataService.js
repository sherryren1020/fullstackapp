import Axios from 'axios';


class dataService{

    getData(callback){
        Axios.get(`${process.env.REACT_APP_API_ROOT_URL}/dogbreeds`)
      .then(response => {
          callback(null,response.data)
      })
      .catch(err =>{
          callback(err.response,null)
      })
    }

    getOneData(callback,dog){
        Axios.get(`${process.env.REACT_APP_API_ROOT_URL}/dogbreeds/${dog}`)
      .then(response => {
          callback(null,response.data)
      })
      .catch(err =>{
          callback(err.response,null)
      })
    }

    addData(callback,createdData){
        Axios.post(`${process.env.REACT_APP_API_ROOT_URL}/dogbreeds`,createdData)
        .then(response => {
            // console.log('added')
            callback(null,response.data)
        })
        .catch(err =>{
            callback(err.response,null)
        })
    }

    editData(callback,editData,dogId){
        Axios.put(`${process.env.REACT_APP_API_ROOT_URL}/dogbreeds/${dogId}`,editData)
        .then(response => {
            callback(null,response.data)
        })
        .catch(err =>{
            callback(err.response,null)
        })
    }

    DeleteData(callback,dogId){
        Axios.delete(`${process.env.REACT_APP_API_ROOT_URL}/dogbreeds/${dogId}`)
        .then(response => {
            callback(null,response.data)
            console.log('deleted')
        })
        .catch(err =>{
            console.log(err.response)
        })
    }
}



export default new dataService()