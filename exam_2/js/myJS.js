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
            if (filterData!=undefined){
                //giny 2012
                //     for (let counter=0;counter<data.length;counter+=1){
                //         console.log(data[counter].name.common);
                //    }
                //giny 2022
                data.map(item=>item.name.common==undefined?"err":console.log(item.name.common));
                let population = 0;
                data.map(item=>population+=item.population);
                console.log("population:",population);
                console.log("avg: "+parseInt(population/data.length));

            }
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