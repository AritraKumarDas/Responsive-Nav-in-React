
import classes from './ProductItem.module.css'

function ProductItem(props) {

    return (
        <li>{props.productName}</li>
    )
}

export default ProductItem;