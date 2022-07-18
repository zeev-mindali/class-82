const myUrl = "https://foodish-api.herokuapp.com/api/";
setInterval(()=>{
    $.ajax({
        url: myUrl,
        success: data=> $("#container").html(`<img src="${data.image}" width="400"/>`),
    });
},5000);

