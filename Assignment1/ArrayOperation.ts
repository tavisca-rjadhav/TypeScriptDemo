export class ArrayOperation{
    constructor(private strs:string[]){
        
    }

    sortArray(): string[]{
        let sortedStringArray = this.strs.sort(this.sortStrings)
        return sortedStringArray
    }

    reverseArray(){
        return this.strs.reverse()
    }

    sortStrings(str1:string, str2:string){
        if(str1.length > str2.length) return 1;
        else if(str1.length === str2.length) return 0;
        else return -1;
    }
}


let opr = new ArrayOperation(["angualar", "java", "csharp", "python"]);
console.log(`Sorted Array of String: ${opr.sortArray()}`);
console.log(`Reverse Array of String: ${opr.reverseArray()}`);