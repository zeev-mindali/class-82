const carURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

$("#searchCar").click(()=>{
    let carNumber = $("#carNum").val();   
   
   $.ajax({
    url: carURL+carNumber,
    success: data=>showCarData(data),
   });
});


const showCarData = (data)=>{ 
    console.log(data)   ;
    const myData = data.result.records[0]; 
    //console.log(getCarString(myData));
    $("#res").html(getCarString(myData));
};

const getCarString =(newData)=>{
    // create the data we want
    // let myString= `<div>${data.tozeret_nm}</div>`;
    // myString+=`<div>${data.kinuy_mishari}</div>`;
    // myString+=`<div>${data.shnat_yitzur}</div>`;
    // myString+=`<div>${data.tzeva_rechev}</div>`;
    // myString+=`<div>${data.sug_delek_nm}</div>`;
    // myString+=`<div>${data.tokef_dt}</div>`;
    // //return the final string
    // return myString;

    let myString = `
    <div>${newData.tozeret_nm}</div>
    <div>${newData.kinuy_mishari}</div>
    <div>${newData.shnat_yitzur}</div>
    <div>${newData.tzeva_rechev}</div>
    <div>${newData.sug_delek_nm}</div>
    <div>${convertDate(newData.tokef_dt)}</div>
    `

    return myString;
}

//new style
const convertDate = str=>{
    //2023-07-11T00:00:00
    const tokef_dt = str.split("T")[0]; // => create an array which the word T will split the string and take the first place
    //2023-07-11T00:00:00 => ["2023-07-11","00:00:00"] and we want only the first place [0]
    //2023-07-11
    const newDate = tokef_dt.split("-");
    //2023-07-11 => will split by - =>["2023","07","11"]
    return newDate[2]+"/"+newDate[1]+"/"+newDate[0];
    //11/07/2023 
}

//old style
function kartzya(str){
    const tokef_dt = str.split("T")[0];
    const newDate = tokef_dt.split("-");
    return newDate[2]+"/"+newDate[1]+"/"+newDate[0];
}
/*
    tozeret_nm
    kinuy_mishari
    shnat_yitzur
    tzeva_rechev
    sug_delek_nm
    tokef_dt
*/

