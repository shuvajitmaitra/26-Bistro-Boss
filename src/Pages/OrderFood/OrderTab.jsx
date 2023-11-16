import Card from "../../Components/Card/Card";


// eslint-disable-next-line react/prop-types
const OrderTab = ({item}) => {


    return(
        <div className="grid md:grid-cols-3 gap-6">
        {
            // eslint-disable-next-line react/prop-types
            item.map(item=> <Card key={item._id} item={item}></Card>)
        }
    </div>
    )}
export default OrderTab;