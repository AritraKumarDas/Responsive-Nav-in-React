import classes from './WaysToOrder.module.css'

function WaysToOrder() {

    return (
        <div className={classes['ways-to-order']}>
            <h2 className="h2">Ways To Order</h2>
            <ul >
                <li>Order online via: <a href='#'>Paypal</a></li>
                <li>Order via Phone: <a href='#'>859-472-4219</a></li>

            </ul>
        </div>
    )
}

export default WaysToOrder;