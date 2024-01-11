function HeaderActions(){
    let themeBtn = document.querySelector("#theme-btn");
    let currTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
    
    const setTheme = (tCol, tWeight) =>{
        themeBtn.children[0].style.backgroundColor = tCol;
        themeBtn.children[1].style.fontWeight = tWeight;
    }

    themeBtn.addEventListener("mouseenter", ()=>{
        setTheme("var(--op-bg)", "bold");
    });
    themeBtn.addEventListener("mouseleave", ()=>{
        setTheme("var(--main-bg)", "normal");
    });
    themeBtn.addEventListener("click", ()=>{
        //(currTheme == "dark") ? setTheme("transparent", "normal") : setTheme("black", "normal")
        if(currTheme == "dark"){
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
            currTheme = "light";
        }else{
            document.documentElement.classList.remove("light");
            document.documentElement.classList.add("dark");
            currTheme = "dark";
        }
    });
}

function HelloActions(){
    let hello = document.querySelector("#hello")
    let myName = document.querySelector("#my-name");
    let knowBtn = document.querySelector("#know-btn")

    myName.addEventListener("mouseenter", ()=>{
        myName.style.color = "green";
        myName.innerHTML = "KAH-ree-mah";
    });
    myName.addEventListener("mouseleave", ()=>{
        myName.style.color = "var(--main-col)";
        myName.innerHTML = "Carrima";
    });

    knowBtn.addEventListener("click", () =>{
        hello.style.top = "-100vh";
    });
}

HeaderActions();
HelloActions();