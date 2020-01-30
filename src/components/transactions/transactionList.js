import React from "react";
import TransactionListEntry from './transactionListEntry';


class TransactionList extends React.Component {
    
    constructor (props) {
        super (props);
        console.log(this.props.data);
    }

    render() {
        return (
            <div>
                {this.props.data.map((entry, idx) => 
                    <p key={idx}>${entry.cost} {entry.description}</p> 
                )}
            </div>
        )
    }
}

export default TransactionList