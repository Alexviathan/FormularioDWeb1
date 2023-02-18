'use strict';
import {checkAvg} from './validate.js';
const cardE =document.getElementById('cardsEstudiantes');
const cardPro = document.getElementById('cardseProfesores');
const students = [];
const profesores = [];

//Mostrando campos según el rol 

const select = (typ) =>{

    switch (typ){
        case "estudiante": 
        //Muestra campos
        document.getElementById("Prom").style.display="inline-block";
        document.getElementById("promedio").style.display="inline-block";
        //Quita campos
        document.getElementById("prof").style.display="none";
        document.getElementById("profesion").style.display="none";
        document.getElementById("Edadl").style.display="none";
        document.getElementById("edad").style.display="none"
        break;
        case "profesor": 
        //Muestra campos
        document.getElementById("prof").style.display="inline-block";
        document.getElementById("profesion").style.display="inline-block";
        document.getElementById("Edadl").style.display="inline-block";
        document.getElementById("edad").style.display="inline-block";
        //Quita campos
        document.getElementById("Prom").style.display="none";
        document.getElementById("promedio").style.display="none";
        break;
        default: 
        document.getElementById("Prom").style.display="none";
        document.getElementById("promedio").style.display="none";
        document.getElementById("prof").style.display="none";
        document.getElementById("profesion").style.display="none";
        document.getElementById("edad").style.display="none";
    }
    
}

const paintCard = (typ) =>{
    typ = typ.toUpperCase();    
    
    if(typ == "ESTUDIANTE"){
        const templateEstudent =document.querySelector("#templateEstudiante").content;
        const fragmentEstudent = document.createDocumentFragment();
        for(let i of students){
            const cloneTemp = templateEstudent.cloneNode(true);
            console.log(cloneTemp);
            cloneTemp.querySelector('.title-card').innerHTML = "Datos del <i>Estudiante</i>";
            cloneTemp.querySelector('.data-card').innerHTML = `${i.nom.toUpperCase()}  ${i.ape.toUpperCase()} `;
            cloneTemp.querySelector('.text-promedio').innerHTML=`Pomedio: ${i.prom}`;
            cloneTemp.querySelector('.text-aprobado').innerHTML = `${checkAvg(i.prom)}`;
            fragmentEstudent.appendChild(cloneTemp);
        }
        cardE.appendChild(fragmentEstudent);
    }
    if (typ == "PROFESOR"){
        const templateProfesor = document.querySelector('#templateProfesor').content;
            const fragmentProfesor = document.createDocumentFragment();
            for(let i of profesores){
                const cloneProfesor = templateProfesor.cloneNode(true);
                console.log(cloneProfesor);
                cloneProfesor.querySelector('.titulo').innerHTML = 'Datos Profesor';
                cloneProfesor.querySelector('.datos').innerHTML = `${i.nom.toUpperCase()} ${i.ape.toUpperCase()}`;
                cloneProfesor.querySelector('.edad').innerHTML = `Edad: ${i.ed}`;
                cloneProfesor.querySelector('.teprofesion').innerHTML = `profesion: ${i.profe}`;
                fragmentProfesor.appendChild(cloneProfesor);
                console.log(fragmentProfesor);
            }
                
        cardPro.appendChild(fragmentProfesor);
    }

};

//OBJETO PARA GUARDAR DATOS DEL ESTUDIANTE 
const addStudent=(name, lastName, avg)=>{
    //Objeto literal de JS
    let student = {
        nom: name,
        ape: lastName,
        prom: avg
    }
    students.push(student); //Guardar objeto dentro del arreglo students
};

//OBJETO PARA GUARDAR DATOS DEL PROFESOR
const addProfe=(nam, ap,prof, eda)=>{
    let pro = {
        nom: nam,
        ape: ap,
        profe: prof,
        ed: eda
    }
    profesores.push(pro);
    console.info(profesores)
};


const modalAlert=(cad)=>{ 
    //console.log(cad);
    const alerta= document.createElement('div');
    const texto = document.createElement('p');
    const img = document.createElement('img');
    img.src='../img/cruz.png';
    img.className="close";
    texto.setAttribute("class","textAlerta");
    alerta.setAttribute("id","alerta");
    alerta.setAttribute("class","alerta");
    texto.innerHTML= `<strong>${cad}</strong>`;
    alerta.appendChild(img);
    alerta.appendChild(texto);
    document.body.appendChild(alerta);
    img.onclick = function(){
        document.getElementById("alerta").remove();
    }
}





export{paintCard,addStudent,modalAlert, select,addProfe};
