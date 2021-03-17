const country_LS = "country"
const country_CN = document.querySelector(".country")
const select = document.querySelector("select")

function showCountry(){
    const country = localStorage.getItem(country_LS)
    const FIRST_CN = document.querySelector(".FIRST"),
        KR_CL = document.querySelector(".KR"),
        TK_CL = document.querySelector(".TK"),
        SP_CL = document.querySelector(".SP");
    if (country == "KR"){
        KR_CL.classList.add("showing")
        FIRST_CN.classList.remove("showing")
    } else if (country == "TK"){
        TK_CL.classList.add("showing")
        FIRST_CN.classList.remove("showing")
    } else {
        SP_CL.classList.add("showing")
        FIRST_CN.classList.remove("showing")
    }
};
function saveCountry(text){
    localStorage.setItem(country_LS,text);
}

function handlerchange(event){
    const currentValue = select.value;
    event.preventDefault();
    saveCountry(currentValue);
}

function askcountry(){
    country_CN.addEventListener("change",handlerchange)
};

function loadCountry (){
    const country = localStorage.getItem(country_LS)
    if(country === null){
        askcountry();
    } else {
        showCountry();
    }
};


function init (){ loadCountry()
};
init();