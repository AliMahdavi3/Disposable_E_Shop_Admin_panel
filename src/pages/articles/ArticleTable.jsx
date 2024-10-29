import React, { useEffect, useState } from 'react'
import PaginatedTable from '../../components/PaginatedTable'
import AddArticle from './AddArticle'
import Actions from './articleAddition/Actions';
import { Alert, Confirm } from '../../utils/alert';
import { deleteArticleService, getArticleService } from '../../services/article';
import ArticleImages from './articleAddition/ArticleImages';
import DetailsModal from './DetailsModal';
import DetailsModalButton from '../../components/DetailsModalButton';

const ArticleTable = () => {
    const [data, setData] = useState([]);
    const [reInitialValues, setReInitialValues] = useState(null);
    const [editId, setEditId] = useState(null);
    const [addArticleModal, setAddArticleModal] = useState(false);
    const [detailsModal, setDetailsModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [forceRender, setForceRender] = useState(0);

    const handleGetArticles = async () => {
        setLoading(true);
        try {
            const res = await getArticleService();
            if (res.status === 200) {
                const articlesWithAuthors = res.data.articles.map(article => ({
                    ...article,
                    authorName: article.author.name,
                    authorBio: article.author.bio,
                    authorProfileImage: article.author.profileImage,
                }));
                setData(articlesWithAuthors);
            }
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }

    const handleDeleteArticle = async (rowData) => {
        if (await Confirm('حذف مقاله!', `آیا از حذف ${rowData.title} اطمینان دارید؟`)) {
            try {
                const res = await deleteArticleService(rowData._id);
                console.log(res);
                if (res.status === 200) {
                    setData(data.filter(d => d._id !== rowData._id));
                    Alert('مقاله حذف شد', 'عملیات موفقیت آمیز بود!', 'success');
                }
            } catch (error) {
                console.log(error);
                Alert('خطا در حذف مقاله', error.message, 'error');
            }
        }
    }

    useEffect(() => {
        handleGetArticles();
    }, [forceRender])


    const dataInfo = [
        { field: 'index', title: '#' },
        { field: 'title', title: 'موضوع' },
        { field: 'authorName', title: 'نام نویسنده' },
        { field: 'readTime', title: 'زمان مطالعه' },
        { field: 'categories', title: 'دسته بندی' },
    ]


    const additionalField = [
        {
            title: 'تصویر نویسنده',
            elements: (rowData) => <ArticleImages rowData={rowData} />,
        },
        {
            title: 'جزئیات',
            elements: (rowData) => <DetailsModalButton
                setReInitialValues={setReInitialValues}
                setDetailsModal={setDetailsModal}
                rowData={rowData} />
        },
        {
            title: 'عملیات',
            elements: (rowData) => <Actions
                handleDeleteArticle={handleDeleteArticle}
                setEditId={setEditId}
                setAddArticleModal={setAddArticleModal}
                rowData={rowData} />
        },
    ]

    const searchParams = {
        placeholder: 'جستجو موضوع مقاله',
        searchFiled: 'title',
    }

    return (
        <>
            <PaginatedTable
                data={data}
                dataInfo={dataInfo}
                additionalField={additionalField}
                loading={loading}
                numOfPage={3}
                searchParams={searchParams}
            >
                <AddArticle
                    setForceRender={setForceRender}
                    setAddArticleModal={setAddArticleModal}
                    addArticleModal={addArticleModal}
                    reInitialValues={reInitialValues}
                    setReInitialValues={setReInitialValues}
                    editId={editId}
                    setEditId={setEditId}
                />
            </PaginatedTable>

            <DetailsModal
                reInitialValues={reInitialValues}
                setDetailsModal={setDetailsModal}
                detailsModal={detailsModal}
            />
        </>
    )
}

export default ArticleTable
