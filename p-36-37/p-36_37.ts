const make_shirt: any = (size: any ,text: string ) => {
    console.log(`Size of your shirt is ${size}  and the message printed on it "${text}"`)
}
make_shirt(23 , 'I LOve PAKISTAN')

console.log('\n\n\t*********** Below is the result of exercise 37 *********\n')

// Task 37 exercise 
const make_shirt1 : any = ( size1: any = 'large', text1: string = 'I love Javescript' ) => {
     console.log(`I'm going to make a "  ${size1}  t-shirt`)
     console.log(`It will say, "${text1}" \n`)
}
make_shirt1();
make_shirt1('medium');
make_shirt1( 'small' , 'Programming is very easy' )

