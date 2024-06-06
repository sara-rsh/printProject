import styles from './cardContent.module.css';
import Devices from '../../assets/icons8-multiple-devices-94.png'
import Money from '../../assets/icons8-money-transfer-94.png'
import Seller from "../../assets/icons8-best-seller-94.png" 
import Truck from '../../assets/icons8-truck-94.png'
import Online from '../../assets/icons8-online-support-94.png'

function cardContent() {
    return ( 
        <div className={styles.container}>
            <div>
                <p>پشتیبانی سریع</p>
                <img src={Online} alt='onlineSupport'/>
            </div>
            <div>
                <p>سفارش آسان</p>
                <img src={Devices} alt='order'/>

            </div>
            <div>
                <p>قیمت مقرون به صرفه</p>
                <img src={Money} alt='money'/>

            </div>
            <div>
                <p>کیفیت عالی</p>
                <img src={Seller} alt='quality'/>

            </div>
            <div>
                <p>ارسال سریع</p>
                <img src={Truck} alt='truck'/>

            </div>
        </div>
     );
}

export default cardContent;