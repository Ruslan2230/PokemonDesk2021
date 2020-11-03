//Работа с простыми типами

function concat (one:string,two:string):string {
    return one + two;
}

concat('Hello ', 'World') // -> Hello World;

// Работа с интерфейсами
interface MyFirstInterface {
    howIDoIt:string;
    simeArray:[string,string,number];
    withData:[object:{
        howIDoIt:string;
        simeArray:[string,number]
    }]

}

const MyHometask:MyFirstInterface = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

//  Типизация функций, используя Generic

interface MyArray<T> {
	[N: number]: T;

	reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}

const tsArray: MyArray<number> = [1,2,3,4];

const sumOfArr = tsArray.reduce((acc,el)=>{return acc+el},0);