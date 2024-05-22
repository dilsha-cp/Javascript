//polymorphism is many forms behaviour put on many forms.
//overridding
class animal{
    sound(){
        console.log('animal make dfferent sound')
    }
}
class dog{
    sound(){
        console.log('dag barks')
    }
}
class cat{
    sound(){
        console.log('cat mews')
    }
}
let animal1=new animal()
let cat1=new cat()
let dog1=new dog()
animal1.sound()
cat1.sound()
dog1.sound()