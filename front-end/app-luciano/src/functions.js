export const formatUrl = url => {    
    if(url.indexOf("/") === 0)
        return process.env.PUBLIC_URL + url;
}

export const formatBackGround = url => {
    const path = formatUrl(url);
    return `url(${path})`;
}

export const calcPromotion = data => {
    const price = data.price.toFixed(2);
    const promotion = data.promotion;
    return price - (promotion * price/100)
}

export const erasePopUp = async (e, root) => {
    const self = e.target;
    if(Array.from(self.classList).includes("popup-box")) {
        self.classList.add("erase-popup");
        self.addEventListener('animationend', () => root.setState({ data: {} }) );    
    }
}

export const getProducts = async () => {
    const res = await fetch(`http://${window.location.hostname}:5000/products`);
    const data = await res.json();
    return data
}

export const getCompany = async () => {
    const url = `http://${window.location.hostname}:5000/company`;
    const res = await fetch(url);
    const data = await res.json();
    return data
}

export const getProfile = async () => {
    const url = `http://${window.location.hostname}:5000/profile`;
    const res = await fetch(url);
    const data = await res.json();
    return data
}