import axios from "axios";

export const getNewsData = async (setter) => {
    try {
        const res = await axios.get("data.json");
        const sortedData = [...res?.data]?.sort((a, b) => a.sort - b.sort);
        const modifiedData = sortedData?.map((item) => {
            if (item?.sort === 1)
                return {
                    ...item,
                    isShowDescription: true,
                    isShowImage: true,
                }
            else if (item?.sort > 1 && item?.sort <= 4) return {
                ...item,
                isShowDescription: true,
                isShowImage: false
            }
            else return {
                ...item,
                isShowDescription: false,
                isShowImage: false
            }
        });
        console.table(modifiedData)
        setter(modifiedData)
    } catch (err) {
        console.log(err);
    }
}