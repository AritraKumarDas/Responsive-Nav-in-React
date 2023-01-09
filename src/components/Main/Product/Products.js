import classes from './Products.module.css'
import ProductItem from './ProductItem';



function Products(props) {

    const { products } = props;

    return (
        <div className={classes.products}>

            <h2 className='h2'>Our Top Products</h2>
            <ol>
                {products.map((item, index) => (
                    <ProductItem
                        key={index}
                        productName={item}
                    />
                ))}
            </ol>
        </div>
    )
}

export default Products;