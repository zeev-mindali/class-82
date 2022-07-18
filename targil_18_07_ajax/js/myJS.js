const carURL = "https://data.gov.il/api/3/action/datastore_search?resource_id=053cea08-09bc-40ec-8f7a-156f0677aff3&q=";

$("#searchCar").click(()=>{
    let carNumber = $("#carNum").val();   
   
   $.ajax({
    url: carURL+carNumber,
    success: data=>showCarData(data),
   });
});


const showCarData = (data)=>{    
    console.log(data);
    let myData = data.result.records[0]; 
};


