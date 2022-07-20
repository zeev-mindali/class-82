const myURL = "https://restcountries.com/v3.1/all";
var filterData;

const getData = (filterData)=>{
    //get data from server with rest
    $.ajax({ 
        url: myURL,
        success : data=>{
            if (filterData===undefined){
                filterData = data;
                 console.log(data);
            }
            filterData = data;
            console.log(data);
            totalCountries(data.length);
        }
    })
};

$("#findAll").click(()=>{
    getData();
})

const totalCountries = (jsonTotal)=>{$("#totalC").html(`total countries: ${jsonTotal}`)};


const createTable = ()=>{};

const findFilter = ()=>{
    getData($("#cName").val());
}


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