function person(){
    let name='dilsha'
    function displayname(){
        console.log('my name is ',name)
        let age=23
        function displayage(){
            console.log('my age is ',age)
        }
        return displayage
    }
    return displayname
}
let g1=person()
console.log(g1)
g1()
let g2=g1()
console.log(g2)
g2()