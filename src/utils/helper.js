import axios from "axios";

export const getNewsData = async (setter) => {
    try {
        const res = await axios.get("data.json");
        const sortedData = [...res?.data]?.sort((a, b) => a.sort - b.sort);
        const leadNews = {
            ...sortedData?.[0],
            isShowDescription: true,
            isShowImage: true,
        }
        const newsWithNoImages = [...sortedData]?.slice(1, 5)?.map(item => ({
            ...item, isShowDescription: false,
            isShowImage: false
        }))
        const newsWithImages = [...sortedData]?.slice(5)?.map(item => ({
            ...item,
            isShowDescription: false,
            isShowImage: false
        }))
        console.table({leadNews, newsWithNoImages, newsWithImages})
        setter({leadNews, newsWithNoImages, newsWithImages})
    } catch (err) {
        console.log(err);
    }
}