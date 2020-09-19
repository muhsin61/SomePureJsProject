const uploadFileImg = document.querySelector(".uploadFileImg");
const myImg = document.querySelector(".myImg");
const imgName = document.querySelector(".imgName");
const beforeImg = document.querySelector("span");

myImg.style.display = "none";

uploadFileImg.addEventListener("change",function(){
    const file = this.files[0];
    console.log(file.name);

    imgName.innerHTML = file.name;

    if(file){
        const reader = new FileReader();
        reader.addEventListener("load",function(){
            console.log(this.result);//base64
            myImg.setAttribute("src",this.result);

            beforeImg.style.display = "none";
            myImg.style.display = "block";

        });
        reader.readAsDataURL(file);
    }else{
        alert("file not found");
    }
});