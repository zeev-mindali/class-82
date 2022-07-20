const myURL = "https://restcountries.com/v3.1/all";
const filterURL = "https://restcountries.com/v3.1/name/";
var filterData;

//invoke getData without any data (find all)
$("#findAll").click(()=>{
    getData();
})

//invoke findFilter to find a country by partial name
$("#findFilter").click(()=>{
    getData($("#cName").val());
});

const getData = (filterData)=>{
    $.ajax({
        url : (filterData==undefined)?myURL:(filterURL+filterData),
        success: data=>{
            console.log(data);
            $("#totalC").html(`total Countries:${data.length}`);
            
        }
    });
}

const totalCountries = (jsonTotal)=>{$("#totalC").html(`total countries: ${jsonTotal}`)};

const createTable = ()=>{};




// const matan = (name,age,height)=>{
//     if (age==undefined){
//         age=0;
//     }
//     if (height==undefined){
//         height=0;
//     }
//     console.log("name:",name," age:",age," height:",height);
// }

// matan("Matan");
// matan("Matan",2);
// matan("Matan",2,180);