class Prices extends React.Component {
    state = {
        currency: 'USD'
    }
    render() {
        const currency = this.props.bpi[this.state.currency];
        return (
            <div className="prices">
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin rate for {currency.description}
                        : <span className="badge badge-primary">
                            {currency.code}
                        </span>
                        <strong>{currency.rate}</strong>
                    </li>
                </ul>
                <div className="change">
                    <select 
                        className="form-control"
                        onChange={e => this.setState({ currency: e.target.value })}>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Prices;