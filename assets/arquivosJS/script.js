/*Navegação */

let inicioBnt = document.querySelector("#bntInicio");
let sobreBnt = document.querySelector("#bntSobre");
let projetosBnt = document.querySelector("#bntProjetos");
let habilidadesBnt = document.querySelector("#bntHabilidades");
let logo = document.querySelector(".logo")

logo.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});
class Scroll {
    windowMove(id) {
        const elementoHtml = document.querySelector(id);
        if (elementoHtml) {
            window.scrollTo ({
                top: elementoHtml.offsetTop - 55,
                behavior: 'smooth',
            });
        }
    }
}
const scroll = new Scroll();

inicioBnt.addEventListener("click",  () => {
    scroll.windowMove("#inicio");
});

sobreBnt.addEventListener("click",  () => {
    scroll.windowMove("#sobre");
});

projetosBnt.addEventListener("click",  () => {
    scroll.windowMove("#projetos");
});

habilidadesBnt.addEventListener("click",  () => {
    scroll.windowMove("#habilidades");
});



/*Projetos */

/*modal*/


const projetosArea = document.querySelector(".projetosArea");
const projetoUm = document.querySelector(".projetoUm");
const projetoDois = document.querySelector(".projetoDois");
const projetoTres = document.querySelector(".projetoTres");
const projetoQuatro = document.querySelector(".projetoQuatro");
const projetoCinco = document.querySelector(".projetoCinco");
const projetoSeis = document.querySelector(".projetoSeis");

const projetoUmIn = document.querySelector(".projetoUmIn");
const projetoDoisIn = document.querySelector(".projetoDoisIn");
const projetoTresIn = document.querySelector(".projetoTresIn");
const projetoQuatroIn = document.querySelector(".projetoQuatroIn");
const projetoCincoIn = document.querySelector(".projetoCincoIn");
const projetoSeisIn = document.querySelector(".projetoSeisIn");
const fecharProjIn = document.querySelectorAll(".fecharProjIn");




let fecharDisplayIn = ((inv) => {
    fecharProjIn.forEach((bnts) => {
        bnts.addEventListener("click", (i) => {
            i = inv
            i.style.display = "none"
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "auto";
    })
    })
});


projetoUm.addEventListener("click", () => {
    projetoUmIn.style.display = "flex";
    document.body.style.overflow = "hidden";
    fecharDisplayIn(projetoUmIn)
});
projetoDois.addEventListener("click", () => {
    projetoDoisIn.style.display = "flex";
    document.body.style.overflow = "hidden";
    fecharDisplayIn(projetoDoisIn)
});
projetoTres.addEventListener("click", () => {
    projetoTresIn.style.display = "flex";
    document.body.style.overflow = "hidden";
    fecharDisplayIn(projetoTresIn)
});
projetoQuatro.addEventListener("click", () => {
    projetoQuatroIn.style.display = "flex";
    document.body.style.overflow = "hidden";
    fecharDisplayIn(projetoQuatroIn)
}); 
projetoCinco.addEventListener("click", () => {
    projetoCincoIn.style.display = "flex";
    document.body.style.overflow = "hidden";
    fecharDisplayIn(projetoCincoIn)
});
projetoSeis.addEventListener("click", () => {
    projetoSeisIn.style.display = "flex";
    document.body.style.overflow = "hidden";
    fecharDisplayIn(projetoSeisIn)
});


    

/*Modal total*/
const modal = document.querySelector("#modalProjetos");
const fecharModal = document.querySelector(".fecharModal");
const abrirModalBtns = document.querySelectorAll(".abrirModal");

abrirModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    })
});
fecharModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";

});
