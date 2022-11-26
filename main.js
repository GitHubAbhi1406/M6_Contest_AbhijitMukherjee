fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((data)=>{
    return data.json();
}).then((objectData)=>{
    let tableData = "";
    objectData.map((values)=>{
        tableData += `<tr>
        <td><img src="${values.image}"></td>
        <td>${values.name}</td>
        <td>${values.symbol}</td>
        <td>$${values.current_price}</td>
        <td>${values.total_volume}</td>
        <td>Mkt Cap:$ ${values.market_cap}</td>
    </tr>`;
    });
    document.getElementById("tablebody").innerHTML = tableData;
})