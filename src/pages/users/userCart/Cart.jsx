import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SpinnerLoad from '../../../components/SpinnerLoad';
import { Alert, Confirm } from '../../../utils/sweetalert2';
import { adminDeleteItemsFromCartsService, getUserCartItemsService } from '../../../services/cart';
import ProductSection from './ProductSection';
import PricesBox from './PricesBox';


const Cart = () => {
    const { userId } = useParams();
    const location = useLocation();
    const [cartData, setCartData] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const userName = location.state?.userName || "کاربر";

    const fetchCartData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await getUserCartItemsService(userId);
            if (res.status === 200) {
                setCartData(res.data);
                console.log(res.data);
            }
        } catch (error) {
            console.error(error.message);
            Alert('خطا!', 'مشکلی در دریافت اطلاعات سبد خرید وجود دارد!', 'error');
        } finally {
            setLoading(false);
        }
    }, [userId]);

    useEffect(() => {
        fetchCartData();
    }, [fetchCartData]);

    const handleDeleteItemFromCart = async (productId) => {
        const confirmDelete = await Confirm('حذف محصول از سبد خرید!', `آیا از حذف محصول مطمئن هستید ؟`, 'question');
        if (confirmDelete.isConfirmed) {
            try {
                const res = await adminDeleteItemsFromCartsService(userId, productId);
                console.log(res)
                if (res.status === 200) {
                    Alert('عملیات موفقیت آمیز بود!', 'محصول از سبد حذف شد!', 'success');
                    fetchCartData();
                }
            } catch (error) {
                Alert('خطایی رخ داده است!', error.message, 'error');
                console.log(error);
            }
        }
    }

    return (
        <>
            {
                loading ? (
                    <div className='h-screen'>
                        <SpinnerLoad />
                    </div>
                ) : (
                    <>
                        <div className='md:px-4 flex justify-between items-center my-3'>
                            <h1 className="text-xs lg:text-sm text-mgreen
                            dark:text-darkModeTextColor">
                                سبد خرید : {userName}
                            </h1>
                            <button
                                onClick={() => navigate(-1)}
                                className="bg-amber-600 dark:bg-darkModeBgColor
                                text-white text-xs lg:text-sm py-2 px-4 rounded-md"
                            >
                                بازگشت
                            </button>
                        </div>
                        <div className="px-1 lg:container grid grid-cols-5 gap-5">
                            <ProductSection
                                cartData={cartData}
                                handleDeleteItemFromCart={handleDeleteItemFromCart}
                            />
                            <PricesBox cartData={cartData} navigate={navigate} />
                        </div>
                    </>
                )
            }

        </>
    )
}

export default Cart
