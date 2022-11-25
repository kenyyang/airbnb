import myRequest from "../request";

export function getHomeGoodPriceData() {
    return myRequest.get({
        url: "/home/goodprice"
    })
}