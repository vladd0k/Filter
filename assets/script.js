const peopleArr = [{
    id: 1,
    name: "Jennifer Lopez",
    age: 55,
    photo: 'assets/img/Jennifer-Lopez.jpg',
    gender: 'female',
},
{
    id: 2,
    name: "Sofia Vergara",
    age: 52,
    photo: 'assets/img/Sofia-Vergara.jpg',
    gender: 'female',
}, 
{
    id: 3,
    name: "Jennifer Aniston",
    age: 55,
    photo: 'assets/img/Jennifer-Aniston.jpg',
    gender: 'female',
}, 
{
    id: 4,
    name: "Melissa McCarthy",
    age: 53,
    photo: 'assets/img/Melissa-McCarthy.jpg',
    gender: 'female',
}, 
{
    id: 5,
    name: "Angelina Jolie",
    age: 49,
    photo: 'assets/img/Angelina-Jolie.jpg',
    gender: 'female',
}, 
{
    id: 6,
    name: "Matthew McConaughey",
    age: 54,
    photo: 'assets/img/Matthew-McConaughey.jpg',
    gender: 'male',
}, 
{
    id: 7,
    name: "Ben Affleck",
    age: 51,
    photo: 'assets/img/Ben-Affleck.jpg',
    gender: 'male',
}, 
{
    id: 8,
    name: "Will Smith",
    age: 55,
    photo: 'assets/img/Will-Smith.jpg',
    gender: 'male',
}, 
{
    id: 9,
    name: "Vin Diesel",
    age: 57,
    photo: 'assets/img/Vin-Diesel.jpg',
    gender: 'male',
}, 
{
    id: 10,
    name: "Leonardo DiCaprio",
    age: 49,
    photo: 'assets/img/Leonardo-DiCaprio.jpg',
    gender: 'male',
}, 
{
    id: 11,
    name: "Robert Downey Jr.",
    age: 59,
    photo: 'assets/img/Robert-DowneyJr.jpg',
    gender: 'male',
}, 
{
    id: 12,
    name: "Ellen DeGeneres",
    age: 66,
    photo: 'assets/img/Ellen-DeGeneres.jpg',
    gender: 'female',
}, 
{
    id: 13,
    name: "Sandra Bullock",
    age: 60,
    photo: 'assets/img/Sandra-Bullock.jpg',
    gender: 'female',
}, 
{
    id: 14,
    name: "Ashton Kutcher",
    age: 46,
    photo: 'assets/img/Ashton-Kutcher.jpg',
    gender: 'male',
}, 
{
    id: 15,
    name: "Timothée Chalamet",
    age: 28,
    photo: 'assets/img/Timothee-Chalamet.jpg',
    gender: 'male',
}, 
{
    id: 16,
    name: "Zendaya",
    age: 27,
    photo: 'assets/img/Zendaya.jpg',
    gender: 'female',
}, 
{
    id: 17,
    name: "Maude Apatow",
    age: 26,
    photo: 'assets/img/Maude-Apatow.jpg',
    gender: 'female',
}, 
{
    id: 18,
    name: "Barbie Ferreira",
    age: 27,
    photo: 'assets/img/Barbie-Ferreira.png',
    gender: 'female',
}, 
{
    id: 19,
    name: "Benedict Cumberbatch",
    age: 48,
    photo: 'assets/img/Benedict-Cumberbatch.jpg',
    gender: 'male',
}, 
{
    id: 20,
    name: "Jacob Batalon",
    age: 27,
    photo: 'assets/img/Jacob-Batalon.jpg',
    gender: 'male',
},  
]


window.addEventListener('load', function(){
    const nameFilter = document.querySelector('#nameFilter');
    const ageRange = document.querySelector('#ageRange');
    const genderRadio = document.querySelectorAll('.gender-radio');
    const userContainer = document.querySelector('.user-container');

    function findMinAge() {
        const age = peopleArr.map(item => item.age)
        
        let minAge = Math.min(...age)
        
        
        return minAge
    }

    function findMaxAge() {
        const age = peopleArr.map(item => item.age)
        
        let maxAge = Math.max(...age)
        
        
        return maxAge
    }

    let minAge = findMinAge()
    let maxAge = findMaxAge()


    let config = {
        name: '',
        age: 90,
        gender: '',
    };

    const setAgeFilterAttr = () =>{
        ageRange.setAttribute('min', minAge)
        ageRange.setAttribute('max', maxAge)
        ageRange.setAttribute('value', maxAge)

    } 

    const renderPerson = (array) => {
        const list = array.map(person => {
            return `
                <div class="user">
                    <div class="user-photo">
                        <img src="${person.photo}" alt="${person.name}">
                    </div>
                    <div class="user-name">${person.name}</div>
                    <div class="user-age">${person.age}</div>
                    <div class="user-gender">${person.gender}</div>
                </div>
            `;
        }).join('');

        userContainer.innerHTML = list;
    };

    renderPerson(peopleArr);

    

    function getNameVal() {
        nameFilter.addEventListener('input', () => {
            let val = nameFilter.value.toLowerCase().trim();
            config.name = val;

            console.log(config.name);

            const filteredForName = mainFilter();
            renderPerson(filteredForName);
        });
    }

    

    function getAgeVal(){
        ageRange.addEventListener('input', ()=>{
            let val = ageRange.value;
            config.age = val;
            filteredForAge = mainFilter()

            renderPerson(filteredForAge);
        })
    }

      function getGenderVal(){
        genderRadio.forEach(item =>{
            item.addEventListener('click', ()=> {
                let val = item.value;
                config.gender = val

                filteredForGender = mainFilter()

                renderPerson(filteredForGender);
            })
        })
    }

   

   // function namesFilter() {
   //     return peopleArr.filter(item => item.name.toLowerCase().includes(config.name));
   // }
//
   // function ageFilter() {
   //     return peopleArr.filter(item => item.age <= config.age)
   // }
//
   // function genderFilter(){
   //     return (config.gender === 'all' ? peopleArr : peopleArr.filter(item => item.gender === config.gender))
   // }

   function mainFilter(){
        const filtered = peopleArr.filter(item =>{
            const setName = item.name.toLowerCase().includes(config.name)
            const setAge = item.age <= config.age
            const setGender = config.gender === 'all' ? peopleArr : item.gender === config.gender
            
            return setName && setAge && setGender


        })

        return filtered
   }



     getAgeVal();
     getNameVal();
     getGenderVal();


     setAgeFilterAttr()
});