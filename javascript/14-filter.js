let number =[1,2,3,4,5,6,7]

let value=number.filter(function(val){
return val>5
})
console.log(value)

// using foreach instead of filter 
let numbereach =[]
number.forEach((val)=>{
    if(val>5){
        numbereach.push(val)
    }
})
console.log(numbereach)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbooks= books.filter((val)=>{
      
      return val.publish>2000
    //   return val
  })

  let genretype=books.filter((val)=>val.genre==="History")
  console.log(userbooks)
//   console.log(genretype)
// scope na kholi return garirakhna pardaina thats called implicit return