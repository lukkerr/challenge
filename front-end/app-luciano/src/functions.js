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

export const erasePopUp = async (self, popup) => {
    
    // e = evento do clique, popup = objeto react 'popup'
    if(self.classList.contains("popup-box")) {
        self.classList.add("erase-popup");
        self.addEventListener('animationend', () => {
            // Zerando state defaultValue de popUp e state data de App
            popup.setState({ defaultValue: [ null,null ] });
            popup.props.root.setState({ data: {} })
        });
    }
}

export const getProducts = async () => {
    const res = await fetch(`http://${window.location.hostname}:5000/products?_sort=id&_order=asc`);
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

// adicionar novo produto no carrinho
export const setProfileAdd = async ( id, count ) => {

    const profile = await getProfile();
    profile.car_items.push(id);
    profile.car_counts.push(count);

    const url = `http://${window.location.hostname}:5000/profile`;
    const headers = new Headers();
    headers.append("Content-Type","application/json");

    const body = {
        "car_items": profile.car_items,
        "car_counts": profile.car_counts
    }

    // const res = await fetch(url, { method: "POST", headers, body });
    const res = await fetch(url, { method: "POST", headers, body: JSON.stringify(body), json: true });
    const data = await res.json();
    return data
}

// alterar produto já colocado no carrinho
export const setProfileChange = async ( id, count ) => {

    const profile = await getProfile();
    const car_items = profile.car_items;
    const car_counts = profile.car_counts;
    const index = car_items.indexOf(id);

    if( count !== "0" )
        car_counts[index] = count;
    else {
        car_items.splice(index, 1);
        car_counts.splice(index, 1);
    }

    const url = `http://${window.location.hostname}:5000/profile`;
    const headers = new Headers();
    // Setando cabeçalho necessário para o envio do Json ao Json Server
    headers.append("Content-Type","application/json");

    const body = {
        "car_items": car_items,
        "car_counts": car_counts
    }

    const res = await fetch(url, {
        method: "POST",
        headers, body:
        JSON.stringify(body),
        json: true
    });

    const data = await res.json();
    return data
}