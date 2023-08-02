



//hidden 1
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
        }
    });
},);

const hiddenElements =  document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));

//hidden 2
const obs = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show2')
        }else{
            entry.target.classList.remove('show2')
        }
    });
});

const hidden =  document.querySelectorAll('.hidden2');
hidden.forEach((e)=> obs.observe(e));

//hidden hero
const ob = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show3')
        }else{
            entry.target.classList.remove('show3')
        }
    });
});

const hid =  document.querySelectorAll('.Me');
hid.forEach((l)=> ob.observe(l));

///email


