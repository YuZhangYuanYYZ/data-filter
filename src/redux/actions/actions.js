export const actionTypes = {
    REQUEST_DATA: 'REQUEST_DATA',
    SAVE_DATA: 'SAVE_DATA'
}

function requestData(){
    return{
        type:actionTypes.REQUEST_DATA,
    }
}   

function saveData(payload){
    return {
        type: actionTypes.SAVE_DATA,
        payload: payload
    }
}

export function getData() {
    return function(dispatch){
        return fetch(`https://blockchaintech-code-test.herokuapp.com/trades.json`)
               .then(
                   response => {
                       response.json();
                       console.log("response.json",response.json)
                   dispatch(requestData())
                   },
                   error => console.log('An error occurred.', error),
               )
              .then(json =>dispatch(saveData(json)) )
    }
}


