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

    addData(callback,createdData){
        Axios.post(`${process.env.REACT_APP_API_ROOT_URL}/dogbreeds`,createdData)
        .then(response => {
            callback(null,response.data)
        })
        .catch(err =>{
            callback(err.response,null)
        })
    }

}

export default new dataService()