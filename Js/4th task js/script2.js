let emp = [{
        userName: "seif",
        work: "front-end",
        age: 22
    },
    {
        userName: "ahmed",
        work: "front-end",
        age: 22
    },
    {
        userName: "sara",
        work: "front-end",
        age: 22
    },
    {
        userName: "alaa",
        work: "front-end",
        age: 22
    },
    {
        userName: "baba",
        work: "front-end",
        age: 22
    },
    {
        userName: "ana",
        work: "front-end",
        age: 22
    },
]

function addEmp() {
    let res = ""
    for (const em of emp) {
        res += `
            <div class="item">
            <h1>${em.userName}</h1>
            <h1>${em.work}</h1>
            <h1>${em.age}</h1>
        </div>
        `
    }
    document.getElementById("item1").innerHTML = res
    return res
}
addEmp()

function run() {
    let show = emp[Math.floor(Math.random() * emp.length)]
    let item2 = `
        <div class="item2">
            <h1>${show.userName}</h1>
        <h1>${show.work}</h1>
            <h1>${show.age}</h1>
        </div>
    `
    document.getElementById("item2").innerHTML = item2
    return item2
}