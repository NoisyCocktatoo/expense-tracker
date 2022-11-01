export default (state, action) => {
    switch(action.type) {
        case 'delete_transaction':
            return{
                ...state,
                transactions: state.transactions.filter(transactions => transactions.id !==
                    action.payload)
            }

        case 'add_transaction':
            return{
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}