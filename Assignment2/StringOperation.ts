export class StringOperation{
    constructor(private str: string){

    }

    findOccurences(ch: string){
        let str1= this.str.split('').filter(x=>x == ch);
        let indices:number[]=[]
        this.str.split('').filter(function(v:string, i:number){
            if(v == ch)
                indices.push(i)
        });
        return {"occurances": str1.length, "indices": indices};
    }
    

    findNumberOfStatements(){
        return this.str.split('.').length;
        
    }

    convertStatement(){
        let str2 = this.str.split('.');
        let str3:string = "";
        str2.forEach(element => {
            str3 += `${element.charAt(0).toUpperCase() + element.slice(1)}.`;            
        });
        return str3;
    }

}

let strOpr = new StringOperation("define a string variable with data of 100 characheters in it and perform the following operation on the data.find out the indexes and occurances of character 'a' in it.findout number of statements in the string.convert the first character of the statement in Upper case.");
console.log(`Find occurences: ${strOpr.findOccurences('a').occurances}, Find Indices: ${strOpr.findOccurences('a').indices}`);

console.log(`Find number of statements: ${strOpr.findNumberOfStatements()}`);

console.log(`Convert statements: ${strOpr.convertStatement()}`);