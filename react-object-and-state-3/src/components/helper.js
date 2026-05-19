const genTickets = (n) => {
    let arr = new Array(n);
    for (let i = 0; i < n; i++) {
        arr[i] = Math.floor(Math.random() * 10);
    }

    return arr;
}

const countSum = (ticket) => {
    const add = ticket.reduce((sum, el) => sum + el);
    return add ;
}

export {genTickets, countSum}