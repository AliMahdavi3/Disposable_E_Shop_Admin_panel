import React, { useCallback, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SpinnerLoad from '../../../components/SpinnerLoad';
import { adminGetUserFavoritesService, adminRemoveFromFavoriteListService } from '../../../services/favorites';
import { Alert, Confirm } from '../../../utils/sweetalert2';
import { apiPath } from '../../../services/httpService';
import { FaTrash } from 'react-icons/fa';

const Favorites = () => {

  const { userId } = useParams();
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userName = location.state?.userName || "کاربر";

  const fetchFavoritesList = useCallback(async () => {
    setLoading(true);
    try {
      const res = await adminGetUserFavoritesService(userId);
      if (res.status === 200) {
        setData(res.data.favorites);
        console.log(res.data.favorites);
      }
    } catch (error) {
      Alert('خطایی رخ داده است!', error.message, 'error');
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchFavoritesList();
  }, [fetchFavoritesList]);

  const deleteProductFromFavorite = async (productId) => {
    const confirmDelete = await Confirm('حذف محصول از علاقه مندی ها!', `آیا از حذف محصول مطمئن هستید ؟`, 'question');
    if (confirmDelete.isConfirmed) {
      try {
        const res = await adminRemoveFromFavoriteListService(userId, productId);
        console.log(res)
        if (res.status === 200) {
          Alert('عملیات موفقیت آمیز بود!', 'محصول از علاقه مندی ها حذف شد!', 'success');
          fetchFavoritesList();
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
            <div className='px-1 flex justify-between items-center my-3'>
              <h1 className="text-xs md:text-sm text-mgreen
              dark:text-darkModeTextColor">
                لیست علاقه مندی : {userName}
              </h1>
              <button
                className='text-white bg-amber-500 dark:text-darkModeTextColor
                dark:bg-darkModeBgColor px-4 py-2 rounded-md text-xs md:text-sm'
                onClick={() => navigate(-1)}
              >
                بازگشت
              </button>
            </div>
            <div className="border-t-2 border-gray-300 container
              rounded-md p-2 mb-5 overflow-y-auto h-[65vh]">
              <ul className='grid grid-cols-3 gap-2'>
                {Array.isArray(data) && data.length > 0 ? (
                  data?.map((item, index) => (
                    <div
                      key={index}
                      className='col-span-3 md:col-span-1 flex justify-between 
                      items-center mt-1 rounded-md border-2 border-gray-300
                      dark:bg-darkModeBgColor py-2 px-2'
                    >
                      <img
                        className='w-[15%] md:w-[10%] rounded-lg border-2'
                        src={`${apiPath}/${item.imageUrl[0]}`}
                        alt=""
                      />
                      <span className="text-gray-500 dark:text-darkModeTextColor 
                        font-medium text-xs">
                        {item.title}
                      </span>
                      <p className='text-xs font-medium text-gray-500
                        dark:text-darkModeTextColor'>
                        {item.price}
                      </p>
                      <div className='md:me-3 flex items-center'>
                        <FaTrash
                          onClick={() => deleteProductFromFavorite(item._id)}
                          className='text-red-600 cursor-pointer'
                        />
                      </div>
                    </div>
                  ))
                ) :
                  (
                    <div className='col-span-3 my-10 flex flex-col justify-center items-center'>
                      <img
                        className='w-[50%] md:w-[15%] border-4 rounded-full'
                        src="/assets/images/favorites.png"
                        alt=""
                      />
                      <h1 className='text-center pt-5 text-xs md:text-base font-medium
                      text-gray-400'>
                        هنوز محصولی به این لیست اضافه نشده است!
                      </h1>
                    </div>
                  )
                }
              </ul>
            </div>
          </>
        )
      }

    </>
  )
}

export default Favorites
