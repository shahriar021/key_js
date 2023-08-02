const user = {
    id:889,
    name:"shakib",
    age:30,
    education:{
        degree:"masters",
        institute:"DU"
    },
};
//object theke name ber kore ene arekta variable e rakha
// const {name:title} = user;
// console.log(title)

const {education:{degree},}=user;
console.log(degree)