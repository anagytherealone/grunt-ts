module ES5 {
    export class Test {
        public get greeting() : string {
            return "Hello!";
        }
    }
}

var test = new ES5.Test();
console.log(test.greeting);
