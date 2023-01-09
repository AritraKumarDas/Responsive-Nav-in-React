import Content from "./Content/Content";
import Products from "./Product/Products";
import WaysToOrder from "./WaysToOrder/WaysToOrder";
import classes from './Main.module.css'

const data = [

    {
        img: "https://cdn.pixabay.com/photo/2015/09/23/03/07/belt-952834__340.jpg",
        description: "Here at Nick's Beef Jerky, we search the planet for the best beef jerky and deliver it to your doorstep. Nobody can beat our prices or our flavors! Sign up now to receive more information about our products, or check out our full list of flavors."
    }
]

const products = ['Teriyaki', 'BBQ', 'Spicy Pepper'];


function Main() {

    return (
        <main className={classes.main}>
            {data.map((item, index) => (
                <Content
                    key={index}
                    imageSrc={item.img}
                    description={item.description}
                />
            ))}

            <Products products={products} />

            <WaysToOrder />

        </main>
    )
}

export default Main;