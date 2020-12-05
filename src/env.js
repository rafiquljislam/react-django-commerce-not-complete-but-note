export const host = "http://127.0.0.1:8000/api/";
export const mainUrl = "http://127.0.0.1:8000";

export const authHeader = {
  Authorization: `token ${window.localStorage.getItem("token")}`,
};

/* 
  useEffect(() => {
    const getData = async () => {
        axios.defaults.headers = authHeader;
        axios.get(`${host}product/`)
            .then((response) => {
                setProduct(response.data)
                console.log(response.data);
            })
    }
    getData();
  }, [])

*/
