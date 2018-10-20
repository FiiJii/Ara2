import API from '../../api'


export const newTransactions = (success) => ( dispatch ) => {
  API.get(`api/trading/transaction_details/averages/`)
  .then(response => {
    if (response.code === 200 ) {
      success(true, response.data)
    }else {
      success(false,[],response.message)
    }
  })
}

export const transactions = (success,page) => ( dispatch ) => {
  API.get(`api/trading/transactions?page=`+page)
  .then(response => {
    if (response.code === 200 ) {
      success(true, response.data)
    }else {
      success(false,[],response.message)
    }
  })


  // API.get('api/trading/transactions/')
  // .then(response => {
  //   if(response.code === 200){
  //     console.log(response)
  //     this.setState({
  //       totalTran: response.data.count,
  //       tradingList: response.data.results
  //     })
  //   }else{
  //     console.log(response)
  //   }
  // })


}
export const details = (success, id ) => ( dispatch ) => {
  API.get(`/api/trading/transaction_details/?transaction=${id}`).then(response => {
    if(response.code === 200){
      success(response)

    }else{
      console.log(response)
    }
  })
}
