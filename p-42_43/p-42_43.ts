const magicians: string[] = ['Harry Houdini', 'David Blaine', 'Teller']

const show_magicians = (arr) => {
    for (let  i = 0 ; i < arr.length ; i++ ) {
        console.log(arr[i])
    }
}


let old_magicions: any[] = [];

//      exercise 42 
const make_great = (arr: any[]) =>  {
    let great_magicians: any[] = [];
    for (let i = 0 ; i < arr.length ; i++){
        great_magicians.push( "The Great " + arr[i] ) ;
        old_magicions.push(arr[i]);
    }
   show_magicians(great_magicians);
  
}
show_magicians(magicians);
make_great(magicians);

///only comment to clear answer
console.log('\n\n *************** old magitions ************** \n')
show_magicians(old_magicions)



//show_magicians(magicians);

//      exercise 43



